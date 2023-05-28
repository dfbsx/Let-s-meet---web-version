import {React, useState} from 'react'
import { draw } from '../crud/draw';
import { useDispatch } from 'react-redux';
import {  getRooms } from '../store/actions';
import "./SearchUser.css";
//import Switch from "@mui/material/Switch";
//import Stack from "@mui/material/Stack";
//import Typography from "@mui/material/Typography";


function SearchUser({open, setOpen}) {
    const dispatch = useDispatch()

    const [newPerson, setNewPerson] = useState({
        isUniversity:true,
        isCity:true,
        gender:"Female",
    })
    if (!open) return null;
    const handleDraw = () => {
        console.log("nowy obiekt", newPerson)
         draw()
        .then((resp)=>{
            console.log("to dostaliśmy", resp.data)
            dispatch(getRooms())
            
            //dispatch(join()) 
        })
        .catch(err=>{
          console.log("Nie działa bo:", err)
          console.log("nowy obiekt", newPerson)
          alert("Nie znaleziono odpowiedniego użytkownika :c")
        })
      }

  return (
   /* <div onClick={()=>setOpen(false)} className='overlay'>
    <div className='modalContainer'
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div>
        <div className="info">
            <div>Wspólna uczelnia?  
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Nie</Typography>
              <Switch
                defaultChecked
                value={newPerson.isUniversity}
                onChange={(event)=>{
                    setNewPerson({...newPerson, isUniversity:event.target.checked})
                }}
                
              />
              <Typography>Tak</Typography>
            </Stack>
             </div>
            <div> Wspólne miasto?
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Nie</Typography>
              <Switch
                defaultChecked
                value={newPerson.isCity}
                onChange={(event)=>{
                    setNewPerson({...newPerson, isCity:event.target.checked})
                }}
              />
              <Typography>Tak</Typography>
            </Stack>
            </div>
            <div>

            <label for="cars">Płeć:</label>
              <select className="cars" id="cars">

    <option value="volvo">Kobieta</option>
    <option value="saab">Mężczyzna</option>


    <option value="mercedes">Bez filtrowania</option>


              </select>
            </div>
            <button className="drawbtn" onClick={handleDraw} >Losuj!</button>
        </div>
      </div>
    </div>
  </div>*/<></>
  )
}

export default SearchUser