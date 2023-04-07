import React from 'react'
import PropTypes from 'prop-types'
import { useHistory, Link } from 'react-router-dom'

import { styles } from './LogIn.module.css'

const LogIn = () => {
  return (
    <div className={styles}>
      <h1>Log In</h1>
      <h2>Correo</h2>
      <input type="text" placeholder="Escriba su correo"/>
      <h2>Contraseña</h2>
      <input type="text" placeholder="Escriba su contraseña"/>
      <br />
      <input type="submit" value="INGRESAR"/>
      <br />
      <Link to="/signin">Registrate</Link>
    </div>
  )
}

LogIn.propTypes = {
  letter: PropTypes.string
}

export default LogIn
