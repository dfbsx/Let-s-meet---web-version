import { React, useState } from "react";
import { draw } from "../crud/draw";
import { useDispatch } from "react-redux";
import { getRooms } from "../store/actions";
import { join } from "../store/actions";
import "./SearchUser.css";

function SearchUser({ open, setOpen }) {
  const dispatch = useDispatch();

  const [newPerson, setNewPerson] = useState({
    isUniversity: true,
    isCity: true,
    gender: "Female",
  });

  if (!open) return null;

  const handleDraw = () => {
    console.log("nowy obiekt", newPerson);
    draw(newPerson.isUniversity, newPerson.isCity, newPerson.gender)
      .then((resp) => {
        console.log("to dostaliśmy", resp.data);
        dispatch(getRooms());
        dispatch(join());
        setOpen(false);
      })
      .catch((err) => {
        console.log("Nie działa bo:", err);
        //alert("Nie znaleziono odpowiedniego użytkownika :c");
      });
  };

  const selectUni = () => {
    const uni = document.getElementById("uni").value;
    setNewPerson({ ...newPerson, isUniversity: uni });
  };

  const selectCity = () => {
    const city = document.getElementById("city").value;
    setNewPerson({ ...newPerson, isCity: city });
  };

  const selectGender = () => {
    const gender = document.getElementById("gender").value;
    setNewPerson({ ...newPerson, gender: gender });
  };

  return (
    <div onClick={() => setOpen(false)} className="overlay">
      <div
        className="modalContainer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="banner">
          <h1>Filtrowanie</h1>
          <div className="info">
            <div className="options">
              <label htmlFor="filter">Wspólna uczelnia?:</label>
              <select className="filter" id="uni" onChange={selectUni}>
                <option value="true">Tak</option>
                <option value="false">Nie</option>
                <option value="">Bez filtrowania</option>
              </select>
              <label htmlFor="filter">Wspólne miasto?:</label>
              <select className="filter" id="city" onChange={selectCity}>
                <option value="true">Tak</option>
                <option value="false">Nie</option>
                <option value="">Bez filtrowania</option>
              </select>
              <label htmlFor="filter">Płeć:</label>
              <select className="filter" id="gender" onChange={selectGender}>
                <option value="Female">Kobieta</option>
                <option value="Male">Mężczyzna</option>
                <option value="">Bez filtrowania</option>
              </select>
            </div>
          </div>
          <button className="drawbtn" onClick={handleDraw}>
            Losuj!
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchUser;
