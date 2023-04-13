import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './ShowAllExamenes.module.css'

const ShowAllExamenes = ({ json }) => {

  return (
    <div className={styles}>
      <table style={{
            width: `100%`,
            border:`1px solid white`
            }}>
            <tr>
              <th>Fecha</th>
              <th>Examen</th>
            </tr>

        {json.map((row, index) => {
          return <tr>
                <th>{row.fecha}</th>
                <th>{row.examen}</th>
              </tr>
        })}
      </table>
    </div>
  )
}

ShowAllExamenes.propTypes = {
  json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
}

export default ShowAllExamenes
