import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { styles } from './ShowAll.module.css'

const ShowAll = () => {
  console.log('ShowAll')

  /*axios.get('http:localhost:3000/api/v1/medicos/').then(res => {
    const data = res.data
    console.log(data)
  })*/

  const getMedicos = async() => {
    try {
      const response = await Axios.get("http://localhost:3000/api/v1/medicos/");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  getMedicos()

  return (
    <div className={styles}>
      <h1>hello</h1>
    </div>
  )
}

ShowAll.propTypes = {
  letter: PropTypes.string
}

export default ShowAll
