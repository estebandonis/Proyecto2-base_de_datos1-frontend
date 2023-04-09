import React from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Navbar, ShowAll, Navbar_mantenimiento } from '../../components'

import { styles } from './Usuario_mantenimiento.module.css'

const Usuario_mantenimiento = () => {

  const getUsuarios = async() => {
    try {
      const response = await Axios.get("http://localhost:3000/api/v1/usuarios/")
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const loadUsuarios = async () => {
    setResponseData(await getUsuarios())
  }

  return (
    <div className={styles}>
      <Navbar_mantenimiento />
      <h1>Usuario</h1>
    </div>
  )
}

Usuario_mantenimiento.propTypes = {
  letter: PropTypes.string
}

export default Usuario_mantenimiento
