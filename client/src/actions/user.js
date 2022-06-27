import axios from 'axios'

export const GET_LIST_USER  = 'GET_LIST_USER'
export const Login = "Login"
export const REGISTER = 'REGISTER'

export const getListUser = ()=>{
    return(dispatch)=>{
        dispatch({
            type : GET_LIST_USER,
            payload :{
                loading : true,
                data:false,
                errorMessage:false
            }
        })
        axios({
            method : "GET",
            url : "http://localhost:3000/user",
            timeout : 12000
        })
        .then((response)=>{
            dispatch({
                type : GET_LIST_USER,
                payload :{
                    loading : false,
                    data : response.data,
                    errorMessage : false
                }
            })
        })
        .catch((error)=>{
            dispatch({
                type : GET_LIST_USER,
                payload :{
                    loading : false,
                    data : false,
                    errorMesssage : error.message
                }
            })
        })
        
    }
    
}
export const login = (data)=>{
    return(dispatch)=>{
        dispatch({
            type:Login,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
        })
        axios({
            method:"POST",
            url:"http://localhost:3000/user/login",
            data:data 
        })
        .then((response)=>{
            
            localStorage.setItem("access_token", response.data.access_token);
            console.log('3. berhasil dapet : ',aksesToken)
            dispatch({
                type:Login,
                payload :{
                    loading : false,
                    data : response.data,
                    errorMessage : false
                }
            })
        })
        .catch((error)=>{
            dispatch({
                type : Login,
                payload : {
                    loading : false,
                    data:false,
                    errorMessage : error.message
                }
            })
        })
    }
}
export const register = (data)=>{
    return(dispatch)=>{
        dispatch({
            type : REGISTER,
            payload:{
                loading : true,
                data : false,
                errorMessage : false
            }
        })
        axios({
            method : "POST",
            url : "http://localhost:3000/user/create",
            timeout : 12000,
            data : data
        })
        .then((response)=>{
            dispatch({
                type : REGISTER,
                payload:{
                    loading : false,
                    data : response.data,
                    errorMessage:false
                }

            })
            
        })
        .catch((error)=>{
            dispatch({
                type : REGISTER,
                payload :{
                    laoding : false,
                    data : false,
                    errorMessage : error.message
                }
            })
        })

    }
}