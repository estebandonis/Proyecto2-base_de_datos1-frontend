import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './ShowAllCirugias.module.css'

const ShowAllCirugias = ({ json }) => {

  return (
    <div className={styles}>
      <table style={{
            width: `100%`,
            border:`1px solid white`
            }}>
            <tr>
              <th>Fecha y Hora</th>
              <th>Nombre del doctor</th>
              <th>Apellido del doctor</th>
              <th>Procedimiento</th>
            </tr>

        {json.map((row, index) => {
          return <tr>
                <th>{row.fecha_hora}</th>
                <th>{row.nombre}</th>
                <th>{row.apellido}</th>
                <th>{row.procedimiento}</th>
              </tr>
        })}
      </table>
    </div>
  )
}

ShowAllCirugias.propTypes = {
  json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
}

export default ShowAllCirugias
