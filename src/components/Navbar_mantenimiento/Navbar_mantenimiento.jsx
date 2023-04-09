import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { styles } from './Navbar_mantenimiento.module.css'

const Navbar_mantenimiento = () => {
  return (
    <div className={styles}>
      <nav>
        <Link to="/medicoUpdate_mantenimiento">Actualizar Medico</Link>
        <Link to="/medicoAdd_mantenimiento">Agregar Medico</Link>
        <Link to="/paciente_mantenimiento">Paciente</Link>
        <Link to="/usuario_mantenimiento">Usuarios</Link>
      </nav>
    </div>
  )
}

Navbar_mantenimiento.propTypes = {
  letter: PropTypes.string
}

export default Navbar_mantenimiento