import { useMemo, useState, useEffect } from 'react'
import { getCalendarService } from 'services/microsoft/init'
import * as luxon from 'luxon'

/**
 * @typedef {object} CalendarEvent
 * @prop {string=} subject
 * @prop {object} body
 * @prop {string} body.contentType
 * @prop {string} body.content
 * @prop {object} start
 * @prop {string} start.dateTime - '2017-04-15T12:00:00'
 * @prop {string} start.timeZone - 'Eruope/paris'
 * @prop {object} end
 * @prop {string} end.dateTime
 * @prop {string} end.timeZone
 * @prop {object} location
 * @prop {string} location.displayName
 * @prop {object[]} attendees
 * @prop {object} attendees.emailAddress
 * @prop {string} attendees.emailAddress.address
 * @prop {string} attendees.emailAddress.name
 * @prop {string} attendees.type
 */

const userObjectId = 'yuehnan.wu@imersive.com'

const pre = `users/${userObjectId}/`

// /users/{id | userPrincipalName}/calendargroups/{id}/calendars/{id}/events

const apiTypes = {
  USER: pre,
  CALENDARS: `${pre}calendars`,
  CALENDARS_GET_SCHEDULE: `${pre}calendar/getSchedule`,
  CALENDAR_GROUPS: `${pre}calendarGroups`,
  EVENTS: 'events',
}
const CalendarAPI = {
  _bind() {
    this.createCalendarGroupCalendar = this.createCalendarGroupCalendar.bind(
      this,
    )
    this.listCalendarGroupCalendar = this.listCalendarGroupCalendar.bind(this)
    this.listCalendarGroups = this.listCalendarGroups.bind(this)
    this.listEvents = this.listEvents.bind(this)
    this.createEvent = this.createEvent.bind(this)
    this.createCalendarGroup = this.createCalendarGroup.bind(this)
    this.createCalendar = this.createCalendar.bind(this)
    this.getUsers = this.getUsers.bind(this)
    this.getFreeOrBusySchedule = this.getFreeOrBusySchedule.bind(this)
    this.listCalendars = this.listCalendars.bind(this)
  },
  async init() {
    this._bind()
    if (!this.service) {
      this.service = await getCalendarService()
      this.isService = true
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
  isService: false,
  /**
   ********** API **********
   */
  getUsers: async function() {
    if (this.isService) {
      const { data } = await this.service.get(apiTypes.USERS)
      return data
    }
  },
  createCalendar: async function({ name }) {
    if (this.isService) {
      const { data } = await this.service.post(apiTypes.CALENDARS, {
        name,
      })
      return data
    }
  },
  createCalendarGroupCalendar: async function({ calendarGroupId, name }) {
    if (this.isService) {
      const { data } = await this.service.post(
        `${apiTypes.CALENDAR_GROUPS}/${calendarGroupId}/calendars`,
        {
          name,
        },
      )
      return data
    }
  },
  createCalendarGroup: async function({
    name = 'name-value',
    classId,
    changeKey,
  }) {
    if (this.isService) {
      const { data } = await this.service.post(apiTypes.CALENDAR_GROUPS, {
        name,
        classId,
        changeKey,
      })
      return data
    }
  },
  /**
   * @param {object} props
   * @param {string} props.calendarId
   * @param {CalendarEvent} props.event
   */
  createEvent: async function({ calendarId, event }) {
    if (this.isService) {
      const { subject, body, location, attendees = [], ...rest } = event
      const { data } = await this.service.post(
        `${apiTypes.CALENDARS}/${calendarId}/${apiTypes.EVENTS}`,
        {
          subject: event.subject || 'BODY_SCAN',
          body: {
            contentType: event.body.contentType || 'HTML',
            content: event.body.content || 'Get the scan of your body',
          },
          location: {
            displayName: location.displayName || 'The Ordinary Company',
          },
          attendees: [
            {
              emailAddress: {
                address: 'customer@fabryque.com',
                name: 'Fabryque',
              },
              type: 'required',
            },
            ...attendees,
          ],
          ...rest,
        },
      )
      return data
    }
  },
  listCalendars: async function() {
    if (this.isService) {
      const { data } = await this.service.get(apiTypes.CALENDARS)
      return data
    }
  },
  listCalendarGroups: async function() {
    if (this.isService) {
      const { data } = await this.service.get(apiTypes.CALENDAR_GROUPS)
      return data
    }
  },
  listCalendarGroupCalendar: async function(calendarGroupId) {
    if (this.isService) {
      const { data } = await this.service.get(
        `${apiTypes.CALENDAR_GROUPS}/${calendarGroupId}/calendars`,
      )
      return data
    }
  },
  getFreeOrBusySchedule: async function() {
    if (this.isService) {
      const {
        data: {
          value: [yuehnan],
        },
      } = await this.service.post(apiTypes.CALENDARS_GET_SCHEDULE, {
        schedules: ['yuehnan.wu@imersive.com'],
        startTime: {
          dateTime: luxon.DateTime.fromMillis(Date.now())
            .minus({ days: 30 })
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
  listEvents: async function({ calendarGroupId, calendarId }) {
    if (this.isService) {
      const { data } = await this.service.get(
        `${pre}calendargroups/${calendarGroupId}/calendars/${calendarId}/events`,
      )
      return data
    }
  },
}

CalendarAPI.init()

/**
 * @returns {CalendarAPI}
 */
const useCalendarAPI = () => {
  const [isInit, setIsInit] = useState(false)
  useEffect(() => {
    if (CalendarAPI.service) {
      setIsInit(true)
    } else {
      CalendarAPI.init().then(() => setIsInit(true))
    }
  }, [setIsInit])

  const api = useMemo(() => (isInit ? CalendarAPI : false), [isInit])
  return api
}

export default CalendarAPI
export { useCalendarAPI }
