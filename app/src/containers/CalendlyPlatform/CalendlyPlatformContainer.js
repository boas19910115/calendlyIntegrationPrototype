import React from 'react'
import './CalendlyPlatform.style.scss'

const CalendlyPlatformContainer = () => {
  return (
    <div className='CalendlyPlatformContainer'>
      <iframe
        src='https://calendly.com/s/V7WfXBbV?month=2020-01&diagnostics=1'
        title='calendly'
      />
      <iframe
        src='https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTaipei&amp;src=am9yYW0xOTkxMDExNUBnbWFpbC5jb20&amp;color=%23336699&amp;showTabs=1&amp;showCalendars=0&amp;showPrint=0&amp;showDate=1&amp;showNav=0&amp;showTitle=0'
        title='google-cal'
      />

      {/* <iframe src='https://backtest.fabryque.com' /> */}
      {/* <iframe src='https://pwa.fabryque.com' /> */}
    </div>
  )
}

export default CalendlyPlatformContainer
