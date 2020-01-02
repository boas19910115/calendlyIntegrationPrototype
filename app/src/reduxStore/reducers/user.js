import actionTypes from 'reduxStore/actionTypes'

// State argument is not application state, only the state this reducer is responsible for
export default function(state = null, action) {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, ...action.data }
    case actionTypes.CLEAR_USER:
      return { checked: true }
    default:
      return state
  }
}
