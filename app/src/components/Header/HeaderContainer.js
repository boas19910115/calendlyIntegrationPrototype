import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../logo.svg'
import HeaderMenu1 from 'components/Header/HeaderMenu1'
import HeaderMenu2 from 'components/Header/HeaderMenu2'

const HeaderContainer = () => {
  return (
    <div className='HeaderContainer'>
      <div className='Logo'>
        <NavLink to='/home'>
          <Logo />
        </NavLink>
      </div>
      <HeaderMenu1 />
      <HeaderMenu2 />
    </div>
  )
}

export default HeaderContainer
