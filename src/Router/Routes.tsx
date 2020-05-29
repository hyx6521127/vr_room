import React, { Fragment } from "react"
import { Route } from 'react-router-dom'
import Room from '../page/Room'

const Routes = () => {
  return (
    <Fragment>
        <Route component={Room} path="/room" />  
    </Fragment>
  )
}

export default Routes
