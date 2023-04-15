import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './ShowAllTopMedicos.module.css'

const ShowAllTopMedicos = ({ json }) => {

  return (
    <div className={styles}>
      <table style={{
            width: `100%`,
            border:`1px solid white`
            }}>
            <tr>
              <th>Nombre del Médico</th>
              <th>Cantidad de Pacientes Atendidos</th>
            </tr>

        {json.map((row, index) => {
          return <tr>
                <th>{row.nombre}</th>
                <th>{row.num_pacientes}</th>
              </tr>
        })}
      </table>
    </div>
  )
}

ShowAllTopMedicos.propTypes = {
  json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
}

export default ShowAllTopMedicos
