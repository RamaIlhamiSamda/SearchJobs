import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {register,getListUser} from '../../actions/user'
import {useEffect,useState} from 'react'
import {useDispatch} from 'react-redux'


function Register (){
    const [name,setName] = useState("")
    const [userName,setuserName] = useState("")
    const [password,setPassword] = useState("")

    const {getRegisterResult} = useSelector(state=>state.userReducer)

    const dispatch = useDispatch()

    const handleSubmit = (event)=>{
        event.preventDefault()
        dispatch(register({name : name,userName:userName, password:password}))
    }

    useEffect(()=>{
        if(getRegisterResult){
            console.log("5.masuk component did update")
            dispatch(getListUser())
            setName('')
            setuserName('')
            setPassword('')
          }
      
        },[getRegisterResult, dispatch])
        return (
            <div>
                <h4 style = {{marginTop:"100px"}} className = "daftar" >Register</h4>
                <form className = "form-register" onSubmit = {(event)=>handleSubmit(event)}>
        
                  <input style = {{width:"400px",marginTop:"20px"}} type = "text" name = "name" placeholder = "input name" value={name} className="form-control"
                  onChange = {(event)=> setName(event.target.value)} />
        
                  <input style = {{width:"400px",marginTop:"20px"}}  type = "text" name = "password" placeholder = "input password" value = {password} className="form-control"
                  onChange = {(event)=> setPassword(event.target.value)} />
        
                  <input style = {{width:"400px",marginTop:"20px"}} type = "text" name = "userName" placeholder = "input userName" value = {userName} className="form-control"
                  onChange = {(event)=> setuserName(event.target.value)} />
                  
                  <button style = {{marginTop:"20px"}}type = "submit" className = "button-login" >Submit</button>
                  
                </form>
            </div>
          )  
}   

export default Register