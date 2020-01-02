import React from 'react'
import CalendlyPlatformContainer from 'containers/CalendlyPlatform/CalendlyPlatformContainer'
import { Route } from 'react-router-dom'
import { useCalendarAPI } from 'services/microsoft/calendar'

const BackPlatformRouteContainer = () => {
  const { getCalendarSchedule, getCalendars } = useCalendarAPI()
  return (
    <div
      onClick={async () => {
        const data1 = await getCalendarSchedule()
        console.log(data1)
        const data2 = await getCalendars()
        console.log(data2)
      }}
      className='BackPlatformRouteContainer'
    >
      {/* <Route path='/calendly'>
        <CalendlyPlatformContainer />
      </Route> */}
    </div>
  )
}

export default BackPlatformRouteContainer
