import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './user/Login'
import Jobs from './Jobs/Jobs'
import Information from './Jobs/Information'
import React, { useState, useEffect } from "react";
import Search from './Jobs/Search'

const Menu = () =>{
    const [loginStatus, setLoginStatus] = useState(false)

    const loginCbHandler = (result)=>{
      setLoginStatus(result)
    }
    useEffect(()=>{
      if(localStorage.getItem('access_token')){
        setLoginStatus(true)
      }
      else{
        setLoginStatus(false)
      }
    },[loginStatus])
    return(
    <>
    <div className = "container-fluid">
    <Routes>
        <Route path = '/login' element = {<Login loginCbHandler = {loginCbHandler}></Login>}></Route>
        <Route path = '/jobs' element = {<Jobs loginStatus = {loginStatus} loginCbHandler = {loginCbHandler}></Jobs>}></Route>
        <Route path = '/information' element = {<Information loginStatus = {loginStatus} loginCbHandler = {loginCbHandler}></Information>}></Route>
        <Route path = '/search' element = {<Search></Search>}></Route>

    </Routes>
    </div>
    </>
    )
}
export default Menu