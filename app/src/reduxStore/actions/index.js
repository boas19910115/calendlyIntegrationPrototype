import actionTypes from 'reduxStore/actionTypes'

function setUserAction(user) {
  return {
    type: actionTypes.SET_USER,
    data: user,
  }
}

function clearUserAction() {
  return {
    type: actionTypes.CLEAR_USER,
  }
}

function loadShopOpenTimeAction(list) {
  return {
    type: actionTypes.LOAD_SHOP_OPEN_TIME,
    data: list,
  }
}

function openPopupAction({ content }) {
  return {
    type: actionTypes.OPEN_POPUP,
    payload: { content },
  }
}
function closePopupAction() {
  return {
    type: actionTypes.CLOSE_POPUP,
  }
}

export {
  setUserAction,
  clearUserAction,
  loadShopOpenTimeAction,
  openPopupAction,
  closePopupAction,
}
