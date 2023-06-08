import { useState } from "react";
import "./EditProfile.css";
import "./StartPage.css";
import { useNavigate } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { useEffect } from "react";
import { getUserData } from "../crud/getUserData";
import { updateUserData } from "../crud/updateUserData";
import { TOKEN } from "../store/actions";

function EditProfile() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState();
  const [userData, setUserData] = useState({
    userName: "",
    bio: "",
    city: "",
    university: "",
    major: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Lets_meeet"))
    console.log("Edycja widok")
    setToken(user.token);
    getUserData(user.token)
      .then((resp) => {
        setUserData(resp.data);
        setIsLoading(false);
        console.log("pobrało")
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data.title?err.response.data.title:"Wystąpił nieznany błąd")
        console.log("Nie pobrało")
      });
  }, []);

  const logout = () => {
    navigate(`/`);
  };

  const backToMainView = () => {
    navigate(`/accountView`);
  };

  const handleUpdateData = () => {
    updateUserData(userData,token)
      .then(() => {
        console.log("jej");
        console.log(userData);
        backToMainView();
      })
      .catch((error) => {
        console.log( error.response.data.title);
        alert(error.response.data.title?error.response.data.title:"Wystąpił nieznany błąd")
        //setSucessedRegister(false)
      });
  };

  return (
    <div className="editView">
      <div className="webHeader">
      <div className='logoandheader'>
                <div className="logo"></div>
                <span>Let's meet!</span>
                </div>
        <button className="logoutbtn" onClick={logout}>
          Wyloguj
        </button>
      </div>
      <div className="editBody">
        <div className="mainBlock">
          <div className="editHeader">
            <h1>Edytuj profil</h1>
            <CgClose onClick={backToMainView} style={{ fontSize: "25" }} />
          </div>
          <div className="editPart">
            <input
              className="editInput"
              placeholder="Nazwa użytkownika"
              value={userData.userName}
              onChange={(e) =>
                setUserData({ ...userData, userName: e.target.value })
              }
            />
            <input
              className="editInput"
              placeholder="Opis"
              value={userData.bio}
              onChange={(e) =>
                setUserData({ ...userData, bio: e.target.value })
              }
            />
            <input
              className="editInput"
              placeholder="Miasto"
              value={userData.city}
              onChange={(e) =>
                setUserData({ ...userData, city: e.target.value })
              }
            />
            <input
              className="editInput"
              placeholder="Uczelnia"
              value={userData.university}
              onChange={(e) =>
                setUserData({ ...userData, university: e.target.value })
              }
            />
            <input
              className="editInput"
              placeholder="Kierunek"
              value={userData.major}
              onChange={(e) =>
                setUserData({ ...userData, major: e.target.value })
              }
            />
            
            <button className="saveDataButton" onClick={handleUpdateData}>
              Zapisz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
