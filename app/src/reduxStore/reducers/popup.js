import React from 'react'
import actionTypes from 'reduxStore/actionTypes'

export default (state = { open: false, content: <div>none</div> }, action) => {
  switch (action.type) {
    case actionTypes.OPEN_POPUP:
      return { ...state, open: true, content: action.payload.content }
    case actionTypes.CLOSE_POPUP:
      return { ...state, open: false }
    default:
      return state
  }
}
