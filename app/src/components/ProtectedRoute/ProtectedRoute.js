import React, { useCallback } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children, render, ...rest }) => {
  const user = useSelector(state => state.user)
  const callbackRender = useCallback(
    ({ location, ...restProps }) =>
      user ? (
        children || render({ location, ...restProps })
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      ),
    [user, children, render],
  )

  return <Route {...rest} render={callbackRender} />
}

export default ProtectedRoute
