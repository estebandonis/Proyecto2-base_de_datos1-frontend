import React from 'react'
import LogIn from './LogIn'
import SignIn from './SignIn'
import Welcome from './Welcome'
import BusquedaMensual from './BusquedaMensual'
import Expediente from './Expediente'
import Reportes from './Reportes'
import MedicoUpdate_mantenimiento from './MedicoUpdate_mantenimiento'
import MedicoAdd_mantenimiento from './MedicoAdd_mantenimiento'
import Paciente_mantenimiento from './Paciente_mantenimiento'
import Usuario_mantenimiento from './Usuario_mantenimiento'

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
      <Route path="/medicoUpdate_mantenimiento">
        <MedicoUpdate_mantenimiento />
      </Route>
      <Route path="/medicoAdd_mantenimiento">
        <MedicoAdd_mantenimiento />
      </Route>
      <Route path="/paciente_mantenimiento">
        <Paciente_mantenimiento />
      </Route>
      <Route path="/usuario_mantenimiento">
        <Usuario_mantenimiento />
      </Route>
      <Route path="/">
        <Welcome />
      </Route>
    </Switch>
  )
}

export { navigate }
export default Page
