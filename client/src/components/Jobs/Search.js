import {useSelector} from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import {search,getJobs} from '../../actions/jobs'
import {useEffect,useState} from 'react'
import {useDispatch} from 'react-redux'
import Navbar from '../Navbar'

function Search(){
    const [description,setDescription] = useState("")
    const [location,setLocation] = useState("")
    

    const dispatch = useDispatch()
    const {getSearchResult,getJobsResult}  = useSelector(state=>state.jobsReducer)

    const navigate = useNavigate()

    const handleSubmit = (event)=>{
        event.preventDefault()
            dispatch(search({description: description,location:location}))
            navigate('/search')    
    }

    useEffect(()=>{
      if(localStorage.getItem('access_token')){
          dispatch(getJobs())
          navigate('/jobs')
      }
      else{
          navigate('/login')
      }

  },[dispatch])
      
      useEffect(()=>{
      
        if(getSearchResult){
          console.log("5.masuk component did update")
          getSearchResult.location
          getSearchResult.description
          search.location
          search.description
          navigate('/search')
        }
    
      },[getSearchResult, dispatch])
      return (
        <>
        <Navbar></Navbar>
        
        <div>
            <form className = "form-login" onSubmit = {(event)=>handleSubmit(event)}>
    
              <input style = {{width:"300px",marginLeft:"220px"}} type = "text" name = "description" placeholder = "input jobName" value={description} 
              onChange = {(event)=> setDescription(event.target.value)} />
    
              <input style = {{width:"300px", marginLeft:"20px"}} type = "text" name = "location" placeholder = "input description" value = {location} 
              onChange = {(event)=> setLocation(event.target.value)} />
              
              <button style = {{marginTop:"20px",marginLeft:"20px"}} type = "submit" className = "button-login" >Submit</button>
              
            </form>
        </div>
        <div className = "">
            <h2>JOB LIST</h2>
            <hr />
        </div>
        {
            <div className = "">
                <p style = {{marginTop:'50px',color:"blue"}}>{getSearchResult.description}</p>
                <p>{getSearchResult.location}</p>
                
            </div>
        }
        </>
      )

}

export default Search