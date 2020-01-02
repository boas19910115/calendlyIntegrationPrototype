import { combineReducers } from 'redux'
import user from './user'
import shopOpenTime from './shopOpenTime'
import popup from './popup'

const rootReducer = combineReducers({
  user,
  shopOpenTime,
  popup,
})

export default rootReducer
