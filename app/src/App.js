import React from 'react'
import './App.scss'
import { FrontEndPlatfrom, BackEndPlatfrom } from 'AppRouterContainer'
import PopupContainer from 'components/Popup'

function App() {
  return (
    <div className='App'>
      <FrontEndPlatfrom />
      <BackEndPlatfrom />
      <PopupContainer />
    </div>
  )
}

export default App
