import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { CalendlyFront } from 'containers/CalendlyFront'
import { LoginPage } from 'containers/LoginPage'

const FrontRoutesContainer = () => {
  return (
    <div className='FrontRoutesContainer'>
      <Switch>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route path='/calendly'>
          {/* <CalendlyFront /> */}
        </Route>
        <Redirect exact from='/' to='/calendly' />
      </Switch>
    </div>
  )
}

export default FrontRoutesContainer
