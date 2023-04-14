import React from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Navbar, ShowAll } from '../../components'

import { styles } from './Reportes.module.css'

const Reportes = () => {
  
  const [responseData, setResponseData] = useState(null)

  const getMedicosById = async() => {
    try {
      const response = await Axios.get("http://localhost:3000/api/v1/medicos/18")
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const loadMedicosById = async () => {
    setResponseData(await getMedicosById())
  }

  useEffect(() => {
    loadMedicosById()
  }, [])

  if (!responseData) {
    return 'Loading...'
  }
  
  return (
    <div className={styles}>
      <ShowAll json={responseData}/>
    </div>
  )
}

Reportes.propTypes = {
  letter: PropTypes.string
}

export default Reportes
