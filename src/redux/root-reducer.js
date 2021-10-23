import {combineReducers} from 'redux'
import FlexReducer from './flex/flex.reducer'

export default combineReducers({
    flex: FlexReducer,
    
})