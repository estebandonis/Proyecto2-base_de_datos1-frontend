import React from 'react'
import LogIn from './LogIn'
import SignIn from './SignIn'
import Welcome from './Welcome'
import BusquedaMensual from './BusquedaMensual'
import Expediente from './Expediente'
import Reportes from './Reportes'
import Mantenimiento from './Mantenimiento'
import InterfazMedico from './InterfazMedico'
import MedicoUpdate_mantenimiento from './MedicoUpdate_mantenimiento'
import MedicoAdd_mantenimiento from './MedicoAdd_mantenimiento'
import PacienteAdd_mantenimiento from './PacienteAdd_mantenimiento'
import PacienteUpdate_mantenimiento from './PacienteUpdate_mantenimiento'
import UsuarioUpdate_mantenimiento from './UsuarioUpdate_mantenimiento'
import UsuarioAdd_mantenimiento from './UsuarioAdd_mantenimiento'

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
      <Route path="/interfazmedico">
        <InterfazMedico />
      </Route>
      <Route path="/mantenimiento">
        <Mantenimiento />
      </Route>
      <Route path="/">
        <Welcome />
      </Route>
    </Switch>
  )
}

export { navigate }
export default Page
