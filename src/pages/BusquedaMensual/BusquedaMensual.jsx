import React, { useState } from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types'
import { ShowAllBusquedaMensual } from '../../components'

import { styles } from './BusquedaMensual.module.css'

const BusquedaMensual = ({ lugarid }) => {
  const [responseData, setResponseData] = useState(null)
  const [show, setShow] = useState(null)

  const getReporte = async () => {
    try {
      const response = await Axios.get(`http://localhost:3000/api/v1/queries/reporte_mensual/${lugarid}`)
      return response.data
    } catch (error) {
      return 'Hubo un problema'
    }
  }

  const loadReporte = async () => {
    setResponseData(await getReporte())
  }

  const handleClick = async () => {
    await loadReporte()
    setShow(true)
  }
  return (
    <div className={styles}>
      <button type="submit" onClick={handleClick}>Ver Busqueda Mensual</button>
      <h2>Busqueda Mensual</h2>
      {
        show ? <ShowAllBusquedaMensual json={responseData} /> : null
      }
    </div>
  )
}

BusquedaMensual.propTypes = {
  lugarid: PropTypes.number,
}

BusquedaMensual.defaultProps = {
  lugarid: PropTypes.number,
}

export default BusquedaMensual
