import React, { useCallback } from 'react'
import { googleSignin } from 'services/firebase/google'

const GoogleSignIn = ({ isSignInCallback }) => {
  const handleOnButtonClick = useCallback(
    () => googleSignin().then(isSignInCallback),
    [isSignInCallback],
  )

  return (
    <div className='GoogleSignIn'>
      <button onClick={handleOnButtonClick}>GOOGLE</button>
    </div>
  )
}

export default GoogleSignIn
