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
    draw()
      .then((resp) => {
        console.log("to dostaliśmy", resp.data);
        dispatch(getRooms());
        dispatch(join())
      })
      .catch((err) => {
        console.log("Nie działa bo:", err);
        console.log("nowy obiekt", newPerson);
        alert("Nie znaleziono odpowiedniego użytkownika :c");
      });
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
              <select className="filter" id="cars">
                <option value="volvo">Tak</option>
                <option value="saab">Nie</option>

                <option value="mercedes">Bez filtrowania</option>
              </select>
              <label htmlFor="filter">Wspólne miasto?:</label>
              <select className="filter" id="cars">
                <option value="volvo">Tak</option>
                <option value="saab">Nie</option>

                <option value="mercedes">Bez filtrowania</option>
              </select>

              <label htmlFor="filter">Płeć:</label>
              <select className="filter" id="cars">
                <option value="volvo">Kobieta</option>
                <option value="saab">Mężczyzna</option>

                <option value="mercedes">Bez filtrowania</option>
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
