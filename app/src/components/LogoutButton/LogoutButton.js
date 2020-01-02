import React, { useCallback } from 'react'
import { firebaseSignout } from 'services/firebase/logout'
import './LogoutButton.scss'

const LogoutButton = () => {
  const handleOnButtonClick = useCallback(() => {
    firebaseSignout()
  }, [])

  return (
    <button onClick={handleOnButtonClick} className='LogoutButton'>
      Sign out
    </button>
  )
}

export default LogoutButton
