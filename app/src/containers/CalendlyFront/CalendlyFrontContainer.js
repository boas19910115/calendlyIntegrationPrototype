import React from 'react'
import CalendlyContainer from 'components/Calendly'
import LogoutButton from 'components/LogoutButton'
import { useSelector } from 'react-redux'

const CalendlyFrontContainer = () => {
  const { user } = useSelector(state => state)
  return (
    <div className='CalendlyFrontContainer'>
      {user && <LogoutButton />}
      <CalendlyContainer />
    </div>
  )
}

export default CalendlyFrontContainer
