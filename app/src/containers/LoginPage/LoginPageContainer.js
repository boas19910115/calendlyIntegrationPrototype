import React, { useCallback, useEffect, useMemo } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import GoogleSignIn from 'containers/LoginPage/GoogleSignIn'
import WrapperWithPropsPassThrough from 'components/wrapperPassPropsThrough'
import { useDispatch, useSelector } from 'react-redux'
import { setUserAction } from 'reduxStore/actions'
import FacebookSignIn from 'containers/LoginPage/FacebookSignIn'

const LoginPageContainer = () => {
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(({ user }) => user)

  const { from: hitoryFrom } = useMemo(
    () => location.state || { from: { pathname: '/' } },
    [location.state],
  )

  useEffect(() => {
    if (user) {
      history.replace(hitoryFrom)
    }
  }, [user, history, hitoryFrom])

  const isSignInCallback = useCallback(
    user => {
      dispatch(setUserAction(user))
    },
    [dispatch],
  )
  return (
    <div className='LoginPageContainer'>
      <WrapperWithPropsPassThrough {...{ isSignInCallback }}>
        <GoogleSignIn />
        <FacebookSignIn />
      </WrapperWithPropsPassThrough>
    </div>
  )
}

export default LoginPageContainer
