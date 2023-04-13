import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './ShowAllMedicamentos.module.css'

const ShowAllMedicamentos = ({ json }) => {

  return (
    <div className={styles}>
      <table style={{
            width: `100%`,
            border:`1px solid white`
            }}>
            <tr>
              <th>Fecha</th>
              <th>Medicamentos</th>
              <th>Evolución</th>
            </tr>

        {json.map((row, index) => {
          return <tr>
                <th>{row.fecha}</th>
                <th>{row.medicamentos}</th>
                <th>{row.evolucion}</th>
              </tr>
        })}
      </table>
    </div>
  )
}

ShowAllMedicamentos.propTypes = {
  json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
}

export default ShowAllMedicamentos
