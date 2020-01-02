import React, { useCallback } from 'react'
import { facebookSignin } from 'services/firebase/facebook'
import 'firebase/auth'

const FacebookSignIn = ({ isSignInCallback }) => {
  const handleOnButtonClick = useCallback(
    () => facebookSignin().then(isSignInCallback),
    [isSignInCallback],
  )

  return (
    <div className='FacebookSignIn'>
      <button onClick={handleOnButtonClick}>FACEBOOK</button>
    </div>
  )
}

export default FacebookSignIn
