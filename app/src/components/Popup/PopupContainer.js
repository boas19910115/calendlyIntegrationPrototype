import React from 'react'
import { useSelector } from 'react-redux'
import './Popup.scss'
import usePopup from 'utils/usePopup'

const PopupContainer = () => {
  const { popup } = useSelector(state => state)
  const { closePop } = usePopup()
  const { open, content } = popup
  return (
    open && (
      <div className='PopupContainer'>
        <div onClick={closePop} className='pop-background'>
          <div className='pop-content'>{content}</div>
        </div>
      </div>
    )
  )
}

export default PopupContainer
