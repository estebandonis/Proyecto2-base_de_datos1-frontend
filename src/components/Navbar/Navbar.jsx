import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { styles } from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles}>
      <nav>
        <Link to="/BusquedaMensual">BusquedaMensual</Link>
        <Link to="/expediente">Expediente</Link>
        <Link to="/reportes">Reportes</Link>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  letter: PropTypes.string
}

export default Navbar