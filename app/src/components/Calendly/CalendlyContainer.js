import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { isCalendlyEvent } from 'components/Calendly/calendly.helper'
import usePopup from 'utils/usePopup'
import { LoginPage } from 'containers/LoginPage'

const CalendlyContainer = () => {
  const { user } = useSelector(state => state)
  const { openPop, closePop } = usePopup()
  useEffect(() => {
    window.addEventListener('message', function(e) {
      if (isCalendlyEvent(e)) {
        console.log(e.data.event)
        switch (e.data.event) {
          case 'calendly.event_type_viewed': {
            if (!user) {
              openPop(<LoginPage />)
            } else {
              // closePop()
            }
            break
          }
          default: {
            break
          }
        }
      }
    })
  }, [openPop, user, closePop])

  useEffect(() => {
    const container = document.querySelector('div.CalendlyContainer')

    window.Calendly.initInlineWidget({
      url:
        'https://calendly.com/yuehnan-wu/body-scan-event?primary_color=409fb0',
      parentElement: container,
      text: 'Start Fabryque',
      color: '#409fb0',
      textColor: '#ffffff',
      branding: false,
      prefill: {
        ...(user
          ? {
              name: user.displayName,
              email: user.email,
            }
          : null),
      },
    })
    const iframes = container.getElementsByTagName('iframe')

    if (iframes.length > 1 && user) {
      iframes.item(0).remove()
    }
  }, [user])

  return <div id='CalendlyContainer' className='CalendlyContainer' />
}

export default CalendlyContainer
