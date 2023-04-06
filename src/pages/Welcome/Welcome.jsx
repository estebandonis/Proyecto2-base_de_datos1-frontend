import React from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Navbar, ShowAll } from '../../components'

import { styles } from './Welcome.module.css'

const Welcome = () => {

  const [responseData, setResponseData] = useState(null)

  const getMedicos = async() => {
    try {
      const response = await Axios.get("http://localhost:3000/api/v1/medicos/")
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const loadMedicos = async () => {
    setResponseData(await getMedicos())
  }

  useEffect(() => {
    loadMedicos()
  }, [])

  if (!responseData) {
    return 'Loading...'
  }

  console.log('responseData', responseData)

  return (
    <div className={styles}>
      PAGE Welcome
       <Navbar />
       <ShowAll json={responseData}/>
    </div>
  )
}

Welcome.propTypes = {
  letter: PropTypes.string
}

export default Welcome