import React from 'react'
import { draw } from '../crud/draw';
import { useDispatch } from 'react-redux';
import {  getRooms } from '../store/actions';
import "./SearchUser.css";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";




function SearchUser({open, setOpen}) {
    if (!open) return null;
  return (
    <div onClick={()=>setOpen(false)} className='overlay'>
    <div className='modalContainer'
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div>
        <div className="info">
            <div>Wspólna uczelnia?  
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Tak</Typography>
              <Switch

              />
              <Typography>Nie</Typography>
            </Stack>
             </div>
            <div> Wspólny kierunek?
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Tak</Typography>
              <Switch

              />
              <Typography>Nie</Typography>
            </Stack>
            </div>
            <div>

            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Kobieta</Typography>
              <Switch

              />
              <Typography>Mężczyzna</Typography>
            </Stack>
            </div>
            <button className="drawbtn"  >Losuj!</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SearchUser