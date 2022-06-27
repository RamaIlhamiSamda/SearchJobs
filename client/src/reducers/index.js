import { combineReducers} from 'redux'


import userReducer from './user'
import jobsReducer from './jobs'

export default combineReducers({
    userReducer,jobsReducer
})