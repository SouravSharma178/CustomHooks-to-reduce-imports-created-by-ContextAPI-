import React, { useEffect } from 'react'
import { useState,useContext } from "react";
import ThemeContext from "../Components/ThemeContext";
import usePersonDispatch from '../Hooks/PersonDispatch';

const AddPerson = ({children,editableVideo}) => {
const theme = useContext(ThemeContext);
const dispatch = usePersonDispatch();

const [video,setVideo] = useState({
  id:1,
  age: 30,
  name:"",
  job:""
})
function handleSubmit(e){
  e.preventDefault();
  if(editableVideo){
    dispatch({type:'UPDATE',payload:video})
  } else{
    dispatch({type:'ADD',payload:video});
  }
  setVideo({
    id:1,
    age: 30,
    name:"",
    job:""
  })
}
function handleChange(e){
    setVideo({...video,[e.target.name]:e.target.value})
}

useEffect(()=>{
  if(editableVideo){
    setVideo(editableVideo)
  } else{
    setVideo({
      id:1,
      age: 30,
      name:"",
      job:""
    })
  }
},[editableVideo])

return (
    <div>
    <form>
    <input type="text" name="name" placeholder='title' onChange={handleChange}
    value={video.name}/>
    <input type="text" name="job" placeholder='title' onChange={handleChange}
    value={video.job}/>
    <button className={theme.mode} onClick={handleSubmit}>{editableVideo?"Edit":"Add"}</button>
    </form>
    </div>
  )
}

export default AddPerson
