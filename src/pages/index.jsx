import React from 'react'
import LogIn from './LogIn'
import SignIn from './SignIn'
import Welcome from './Welcome'
import BusquedaMensual from './BusquedaMensual'
import Expediente from './Expediente'
import Reportes from './Reportes'

import { Switch, Route } from 'react-router-dom'

const navigate = (page) => {
  window.location = `/?route=${page}`
}

const Page = () => {
  // escoger la pagina

  return (
    <Switch>
      <Route path="/login">
        <LogIn />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/busquedamensual">
        <BusquedaMensual />
      </Route>
      <Route path="/expediente">
        <Expediente />
      </Route>
      <Route path="/reportes">
        <Reportes />
      </Route>
      <Route path="/">
        <Welcome />
      </Route>
    </Switch>
  )
}

export { navigate }
export default Page
