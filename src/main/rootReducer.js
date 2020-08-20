import { combineReducers } from 'redux'
import groupReducer from '../store/reducers/groupReducer'

const ROOT_REDUCER = combineReducers({
  group: groupReducer
})

export default ROOT_REDUCER
