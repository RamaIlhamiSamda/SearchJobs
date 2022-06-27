import { GET_JOBS,SEARCH,INFORMATION } from "../actions/jobs"

const initialState = {
    getJobsResult : false,
    getJobsLoading : false,
    getJobsEror : false,

    getSearchResult:false,
    // getSearchLoading:false,
    // getSearchEror:false,

    informationJob : false


}

const jobs = (state = initialState,action)=>{
    switch(action.type){
        case GET_JOBS:
            return{
                ...state,
                getJobsResult : action.payload.data,
                getJobsLoading : action.payload.loading,
                getJobsEror : action.payload.errorMessage
            }
        case SEARCH:
            return{
                ...state,
                getSearchResult : action.payload.data,
                // getSearchLoading:action.payload.loading,
                // getSearchEror:action.payload.errorMessage
            }

        case INFORMATION : 
            return{
                ...state,
                informationJob:action.payload.data
            }
        default:
        return state

    }
}

export default jobs