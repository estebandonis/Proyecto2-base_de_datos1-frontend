import React from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Navbar, ShowAll, Navbar_mantenimiento } from '../../components'

import { styles } from './Paciente_mantenimiento.module.css'

const Paciente_mantenimiento = () => {

  return (
    <div className={styles}>
      <Navbar_mantenimiento />
      <h1>Paciente</h1>
    </div>
  )
}

Paciente_mantenimiento.propTypes = {
  letter: PropTypes.string
}

export default Paciente_mantenimiento
