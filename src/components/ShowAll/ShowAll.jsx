import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './ShowAll.module.css'

const ShowAll = ({ json }) => {

  return (
    <div className={styles}>
      {json.map((row, index) => {
        return <div>
          <table style={{
            width: `100%`,
            border:`1px solid white`
            }}>
            <tr style={{border:`1px solid white`}}>
              <th>medicoid</th>
              <th>nombre</th>
              <th>apellido</th>
              <th>direccion</th>
              <th>telefono</th>
              <th>numero_colegiado</th>
              <th>especialidad</th>
              <th>lugarid</th>
            </tr>
            <tr style={{border:`1px solid white`}}>
              <th>{row.medicoid}</th>
              <th>{row.nombre}</th>
              <th>{row.apellido}</th>
              <th>{row.direccion}</th>
              <th>{row.telefono}</th>
              <th>{row.numero_colegiado}</th>
              <th>{row.especialidad}</th>
              <th>{row.lugarid}</th>
            </tr>
          </table>
        </div>
      })}
    </div>
  )
}

ShowAll.propTypes = {
  json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
}

export default ShowAll
