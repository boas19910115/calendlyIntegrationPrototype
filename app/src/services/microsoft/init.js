import * as msal from 'msal'
import Axios from 'axios'

const msalConfig = {
  auth: {
    clientId: '8858adc8-de3b-4505-9b2f-1c25e9006448',
    authority:
      'https://login.microsoftonline.com/f56e3e3a-947a-4a6c-b20c-15cf3861dce9',
    redirectURI: `${window.location.href}`,
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: true,
  },
}

const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com/v1.0',
}

const microsoft = new msal.UserAgentApplication(msalConfig)

const signin = reqObj => microsoft.loginPopup(reqObj)

const getToken = async reqObj => {
  try {
    const res = await microsoft.acquireTokenSilent(reqObj)
    setAccessInfo(res)
    const { accessToken } = res
    return accessToken
  } catch (error) {
    switch (error.name) {
      case 'InteractionRequiredAuthError': {
        const res = await microsoft.acquireTokenPopup(reqObj)
        const { accessToken } = res
        setAccessInfo(res)
        return accessToken
      }
      default: {
        throw error
      }
    }
  }
}

const setAccessInfo = accessInfo => {
  sessionStorage.setItem('accessInfo', JSON.stringify(accessInfo))
}

const getCalendarService = async () => {
  const reqObj = {
    scopes: ['user.read', 'Calendars.ReadWrite'],
  }
  try {
    await signin(reqObj)
    const token = await getToken(reqObj)
    const graphService = Axios.create({
      baseURL: graphConfig.graphMeEndpoint,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return graphService
  } catch (error) {
    return error
  }
}

const getAccessToken = callback => {
  var now = new Date().getTime()
  var isExpired = now > parseInt(sessionStorage.tokenExpires)
  // Do we have a token already?
  const accessInfoString = sessionStorage.getItem('accessInfo')
  if (accessInfoString && !isExpired) {
    const { accessToken } = JSON.parse(accessInfoString)
    // Just return what we have
    if (callback) {
      callback(accessToken)
    }
  } else {
    // Attempt to do a hidden iframe request
    getToken(callback)
  }
}

export { microsoft, getAccessToken, getCalendarService }
