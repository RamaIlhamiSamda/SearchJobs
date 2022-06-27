import React,{useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getJobs, information} from '../../actions/jobs'
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar'



function Information (){
    const {informationJob} = useSelector((state)=>state.jobsReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem('access_token')){
            dispatch(getJobs())
            navigate('/information')
        }
        else{
            navigate('/login')
        }

    },[dispatch])

    return(
        <>
        <Navbar></Navbar>
        {
            <div style = {{marginTop:"50px",marginLeft:"50px"}} className = "">
                <h2 >{informationJob.jobName}</h2>
                <hr />
                <h2>Information</h2>
                <p style = {{marginTop:"20px"}}>{informationJob.information}</p>
                <h2>what will you doing</h2>
                <p style = {{marginTop:"20px"}}>{informationJob.jobdesk}</p>
                <h2>what we look for</h2>
                <p style = {{marginTop:"20px"}}>{informationJob.spesification}</p>
            </div>
        }
                
        </>

    )
}
export default Information