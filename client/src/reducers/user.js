import {GET_LIST_USER, Login,REGISTER} from '../actions/user'

const initialState ={
    getListUserResult : false,
    getListUserLoading : false,
    getListUserEror:false,

    getLoginResult :false,
    getLoginLoading : false,
    getLoginEror : false,

    getRegisterResult : false,
    getRegisterLoading : false,
    getRegisterEror : false

}

const user = (state = initialState,action)=>{
    switch(action.type){
        case GET_LIST_USER:
            return{
                ...state,
                getListUserResult:action.payload.data,
                getListUserLoading:action.payload.loading,
                getListUserEror:action.payload.errorMessage
            }
        case Login:
            return{
                ...state,
                getLoginResult:action.payload.data,
                getLoginLoading : action.payload.loading,
                getLoginEror : action.payload.errorMessage
            }
        case REGISTER : 
            return{
                ...state,
                getRegisterResult : action.payload.data,
                getRegisterLoading : action.payload.loading,
                getRegisterEror:action.payload.errorMessage
            }
        default:
        return state
    }
}

export default user