import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useLocation } from "react-router-dom"
import BusquedaMensual from '../BusquedaMensual'
import Expediente from '../Expediente'
import Reportes from '../Reportes'

import { styles } from './InterfazMedico.module.css'

const InterfazMedico = () => {
  const location = useLocation()
  const lugarid = location.state.lugarid
  const num = location.state.num

  const [busquedaMensual, setBusquedaMensual] = useState(true)
  const [expediente, setExpediente] = useState(false)
  
  const handleClickBusquedaMensual = async() => {
    setBusquedaMensual(true)
    setExpediente(false)
  }

  const handleClickExpediente = async() => {
    setBusquedaMensual(false)
    setExpediente(true)
  }


  return (
    <div className={styles}>
      <nav>
        <button onClick={handleClickBusquedaMensual}>Busqueda Mensual</button>
        <button onClick={handleClickExpediente}>Expediente</button>
      </nav>
      
      {
        busquedaMensual?
        <BusquedaMensual lugarid={lugarid}/>
        :null
      }
      {
        expediente?
        <Expediente />
        :null
      }

    </div>
  )
}

InterfazMedico.propTypes = {
  letter: PropTypes.string
}

export default InterfazMedico
