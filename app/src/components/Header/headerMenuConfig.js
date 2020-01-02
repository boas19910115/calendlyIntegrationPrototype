import React, { useCallback } from 'react'
import * as firebase from 'firebase/app'
import { NavLink, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { clearUserAction } from 'reduxStore/actions'

const menuTypes = {
  PRODUCT: 'product',
  SHOP_TIME: 'shop open time',
  ABOUT: 'about',
  USER_INFO: 'user information',
  LOGIN: 'login',
}

const menuConfigs = {
  [menuTypes.ABOUT]: {
    className: 'About',
    Jsx: ({ ...rest }) => (
      <NavLink to='/about' {...rest}>
        ABOUT
      </NavLink>
    ),
  },
  [menuTypes.PRODUCT]: {
    className: 'Product',
    Jsx: ({ ...rest }) => (
      <NavLink to='/product' {...rest}>
        PRODUCT
      </NavLink>
    ),
  },
  [menuTypes.SHOP_TIME]: {
    className: 'Product',
    Jsx: ({ ...rest }) => (
      <NavLink to='/shop-time' {...rest}>
        SHOP TIME
      </NavLink>
    ),
  },
  [menuTypes.USER_INFO]: {
    className: 'UserInfo',
    Jsx: ({ ...rest }) => (
      <NavLink to='/user-info' {...rest}>
        <i className='material-icons'>account_circle</i>
      </NavLink>
    ),
  },
  [menuTypes.LOGIN]: {
    className: 'Login',
    Jsx: ({ ...rest }) => {
      const dispatch = useDispatch()
      const history = useHistory()
      const isSignIn = useSelector(state => state.user)
      const handleOnClick = useCallback(() => {
        if (isSignIn) {
          firebase
            .auth()
            .signOut()
            .then(() => dispatch(clearUserAction()))
        } else {
          history.push('/login')
        }
      }, [history, isSignIn, dispatch])
      return (
        <div
          style={{ cursor: 'pointer' }}
          onClick={handleOnClick}
          to='/login'
          {...rest}
        >
          {isSignIn ? 'Sign out' : 'Sign in'}
        </div>
      )
    },
  },
}

const menu1List = [
  menuConfigs[menuTypes.ABOUT],
  menuConfigs[menuTypes.SHOP_TIME],
].map(({ Jsx, className, ...rest }) => (
  <Jsx key={className} {...{ className, ...rest }} />
))
const menu2List = [
  menuConfigs[menuTypes.USER_INFO],
  menuConfigs[menuTypes.LOGIN],
].map(({ Jsx, className, ...rest }) => (
  <Jsx key={className} {...{ className, ...rest }} />
))

export { menuConfigs, menu1List, menu2List }
