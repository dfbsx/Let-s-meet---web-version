import React from 'react'
import { draw } from '../crud/draw';
import { useDispatch } from 'react-redux';
import {  getRooms } from '../store/actions';


function SearchUser() {
    const dispatch = useDispatch()
    const handleDraw = () => {
        draw()
        .then((resp)=>{
            console.log("to dostaliśmy", resp.data)
            dispatch(getRooms())
            //dispatch(join()) 
        })
        .catch(err=>{
          console.log("Nie działa bo:", err)
        })
      }
  return (
    <div>
        <button className="drawbtn" onClick={handleDraw}>Losuj!</button>
    </div>
  )
}

export default SearchUser