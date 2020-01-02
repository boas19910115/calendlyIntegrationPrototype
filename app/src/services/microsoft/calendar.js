import { useMemo, useState, useEffect } from 'react'
import { getCalendarService } from 'services/microsoft/init'
import * as luxon from 'luxon'

const apiTypes = {
  CALENDARS: 'calendars',
  GET_SCHEDULE: 'calendar/getSchedule',
}

const calendarAPI = {
  _bind() {
    this.getCalendarSchedule = this.getCalendarSchedule.bind(this)
    this.getCalendars = this.getCalendars.bind(this)
  },
  async init() {
    this._bind()
    if (!this.service) {
      this.service = await getCalendarService()
      return this
    } else {
      return this
    }
  },
  /**
   * @type {import('axios').AxiosInstance}
   */
  service: null,
  format: "yyyy-LL-dd'T'HH:mm:ss",
  /**
   ********** API **********
   */
  async getCalendars() {
    if (this.service) {
      const { data } = await this.service.get(apiTypes.CALENDARS)
      return data
    }
  },
  async getCalendarSchedule() {
    if (this.service) {
      const {
        data: {
          value: [yuehnan],
        },
      } = await this.service.post(apiTypes.GET_SCHEDULE, {
        schedules: ['yuehnan.wu@imersive.com'],
        startTime: {
          dateTime: luxon.DateTime.fromMillis(Date.now())
            .minus({ days: 62 })
            .toFormat(this.format),
          timeZone: 'Europe/Paris',
        },
        endTime: {
          dateTime: luxon.DateTime.fromMillis(Date.now()).toFormat(this.format),
          timeZone: 'Europe/Paris',
        },
        availabilityViewInterval: 60,
      })
      return yuehnan
    }
  },
}

calendarAPI.init()

const useCalendarAPI = () => {
  const [isInit, setIsInit] = useState(false)
  useEffect(() => {
    if (calendarAPI.service) {
      setIsInit(true)
    } else {
      calendarAPI.init().then(() => setIsInit(true))
    }
  }, [setIsInit])
  /**
   * @type {calendarAPI}
   */
  const api = useMemo(() => ((isInit ? calendarAPI : false)), [isInit])
  return api
}

export default calendarAPI
export { useCalendarAPI }
