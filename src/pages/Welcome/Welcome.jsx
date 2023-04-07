import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { styles, login, signin } from './Welcome.module.css'

const Welcome = () => {

  return (
    <div className={styles}>
      <Link to="/login" className={login}>Log In</Link>
      <Link to="/signin" className={signin}>Sign In</Link>
      <Link to="/busquedamensual">Busqueda Mensual</Link>
    </div>
  )
}

Welcome.propTypes = {
  letter: PropTypes.string
}

export default Welcome
