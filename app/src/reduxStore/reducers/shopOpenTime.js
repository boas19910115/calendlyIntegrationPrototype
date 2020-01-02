import actionTypes from 'reduxStore/actionTypes'

// State argument is not application state, only the state this reducer is responsible for
export default function(state = null, action) {
  switch (action.type) {
    case actionTypes.LOAD_SHOP_OPEN_TIME:
      return [...action.data]
    default:
      return state
  }
}
