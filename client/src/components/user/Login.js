// import React,{ useEffect,useState } from "react";
// import {useDispatch} from 'react-redux'
// import {useSelector} from 'react-redux'
// import {useNavigate} from 'react-router-dom'
// import {login} from '../../actions/user'



// function Login(){

//     const {getLoginResult} = useSelector(state=>state.userReducer)
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
    
//     useEffect(()=>{
//        if(localStorage.getItem("access_token")){
          
//            navigate('/jobs')
//        }
//     },[getLoginResult])

//     const [form,setForm] = useState({
//         userName  : "",
//         password : ""
//     })

//     const submitHandler =  ()=>{
//         dispatch(login(form))
        
//     }
    
//     return(
//         <>
//         <div className = "">
                            
//             <form>
//                 <input
//                 onChange={(e) => setForm({ ...form, userName: e.target.value })}
//                 type="text"
//                 placeholder="input email"
//                 />
//                 <input
//                 className="input-2"
//                 onChange={(e) => setForm({ ...form, password: e.target.value })}
//                 type="text"
//                 type="password"
//                 placeholder="input password"
//                 />
//                 <button className="button" onClick={() => submitHandler()}>
//                 Login
//                 </button>
//             </form>
//         </div>
//         </>
//     )
// }

// export default Login

import React, { useState, useEffect } from "react";
import axios from "axios";
import Register from './Register'

import { useNavigate } from "react-router-dom";
import internet from "../../image/internet.jpg";


const Login = (props) => {
  const { loginStatus, loginCbHandler } = props;
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  const loginUser = async () => {
    try {
      let result = await axios({
        method: "POST",
        url: "http://localhost:3000/user/login",
        data: form,
      });
      const access_token = result.data.access_token;
      localStorage.setItem("access_token", access_token);
      // console.log(result.data)
      setForm(result.data);
      loginCbHandler(true);
    } catch (err) {
      console.log(err);
    }
  };
  const Navigate = useNavigate();

  const submitHandler = () => {
    loginUser();
    Navigate("/jobs");
  };


  return (
    <>
      <div className="login-all">
        <div style ={{marginLeft:"100px"}} className="login">
        <h1 style = {{fontSize:"50px",display:"flex",alignItems:"center",color:"white"}}>SEARCH JOBS</h1>
        </div>
          <form >
            <input
              style = {{marginLeft:"900px",display:"flex",alignItems:"center",marginTop:"-29px"}}
              onChange={(e) => setForm({ ...form, userName: e.target.value })}
              type="text"
              placeholder="input userName"
            />
            <input
              style = {{marginLeft:"1100px",display:"flex",alignItems:"center",marginTop:"-28px"}}
              className="input-2"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type="text"
              type="password"
              placeholder="input password"
            />
            <button style = {{marginLeft:"1300px",display:"flex",alignItems:"center",marginTop:"-28px"}} className="button" onClick={() => submitHandler()}>
              Login
            </button>
          </form>

        
      </div>
      <div className = "register">
          <Register></Register>
      </div>
      <img style = {{marginTop:"-300px"}} className="img-login" src={internet} />

    </>
  );
};

export default Login;
