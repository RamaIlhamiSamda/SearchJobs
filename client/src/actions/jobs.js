import axios from "axios"

export const GET_JOBS  = 'GET_JOBS'
export const SEARCH = "SEARCH"
export const INFORMATION = "INFORMATION"

export const  getJobs = ()=>{
    console.log('2. masuk action')
    return(dispatch)=>{
        dispatch({
            type : GET_JOBS,
            payload : {
                data : false,
                loading :true,
                errorMessage : false
            }
        })
        axios({
            method : 'GET',
            url : 'http://localhost:3000/jobs',
            timeout:12000
        })
        .then((response)=>{
            console.log('3. berhasil dapet : ',response)
            dispatch({
                type : GET_JOBS,
                payload:{
                    loading : false,
                    data : response.data,
                    errorMessage : false
                }
            })
        })
        .catch((error)=>{
            console.log('3. gagal dapat',error)
            dispatch({
                type : GET_JOBS,
                payload :{
                    data : false,
                    loading : false,
                    errorMessage : error.message
                }
            })
        })
    }
}

// export const search = (data)=>{
//     return(dispatch)=>{
//         dispatch({
//             type : SEARCH,
//             payload : {
//                 loading : true,
//                 data : false,
//                 errorMessage : false
//             }
//         })
//         axios({
//             method : 'GET',
//             url : 'http://localhost:3000/jobs',
//             timeout:12000,
//             data:data
           
//         })
//         .then((response)=>{
//             dispatch({
//                 type : SEARCH,
//                 payload :{
//                     loading : false,
//                     data : response.data,
//                     errorMessage : false
//                 }
//             })
//         })
//         .catch((error)=>{
//             dispatch({
//                 type : SEARCH,
//                 payload :{
//                     loading :false,
//                     data : false,
//                     errorMessage : error.message
//                 }
//             })
//         })

        
//     }
    
// }
export const information = (data)=>{
    return(dispatch)=>{
        console.log("3.dapat data : ", data)
        dispatch({
            type:INFORMATION,
            payload:{
                data:data
            }
        })
    }
}
export const search = (data)=>{
    return(dispatch)=>{
        dispatch({
            type : SEARCH,
            payload : {
                data:data
            }
        })
    }
}