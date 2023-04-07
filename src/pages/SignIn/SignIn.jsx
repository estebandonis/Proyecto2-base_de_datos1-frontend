import React from 'react'
import PropTypes from 'prop-types'
import { useHistory, Link } from 'react-router-dom'

import { styles } from './SignIn.module.css'

const SignIn = () => {
  return (
    <div className={styles}>
      <h1>Sign In</h1>
      <h2>Correo</h2>
      <input type="text" placeholder="Escriba su correo"/>
      <h2>Contraseña</h2>
      <input type="text" placeholder="Escriba su contraseña"/>
      <h2>Numero de colegiado</h2>
      <input type="text" placeholder="Escriba el numero"/>
      <br />
      <input type="submit" value="INGRESAR"/>
      <br />
      <Link to="/login">Ingresa</Link>
    </div>
  )
}

SignIn.propTypes = {
  letter: PropTypes.string
}

export default SignIn
