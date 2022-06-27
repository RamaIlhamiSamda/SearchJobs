import React,{useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getJobs, information} from '../../actions/jobs'
import { useNavigate } from "react-router-dom";
import Search from './Search'
import Navbar from '../Navbar'

function Jobs(){

    const {getJobsResult,getJobsLoading,getJobsEror,informationJob} = useSelector((state) => state.jobsReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
        if(informationJob){
          console.log("5.masuk component did update")
          informationJob.information
          informationJob.jobdesk
          informationJob.spesification
          information.id

          navigate('/information')
        }
    
      },[informationJob, dispatch])
    
    return(
        <>
        
        <Search></Search>
        
        {
                 getJobsResult ?(
                     getJobsResult.map((jobs)=>{
                         return(
                             <div className = "">
                                 <p style = {{marginTop:'50px',color:"blue"}}onClick={()=>dispatch(information(jobs))}>{jobs.jobName}</p>
                                 <p>{jobs.description} -  full time</p>
                                 {/* <button style = {{marginleft : '10px'}}onClick={()=>dispatch(information(jobs))}>Information</button> */}
                             </div>
                             
                         )
                     })
                 ):getJobsLoading ?(
                     <p>Loading ...</p>
                 ):
                 <p>{getJobsEror?getJobsEror:"data kosong"}</p>

             }
             
        
             
        </>
    )
}

export default Jobs


