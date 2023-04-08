import React from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types'
import { ChangeEvent, useEffect, useState } from 'react'
import { Navbar, ShowAll } from '../../components'

import { styles } from './Expediente.module.css'

const Expediente = () => {
  
  const [responseData, setResponseData] = useState(null)
  const [inputText, setInputText] = useState("");
  const [submit, setSubmit] = useState(false)
  const [show, setShow] = useState(false)

  const handleChange = (valor) => {
    // 👇 Store the input value to local state
    setInputText(valor.target.value);
    setSubmit(false)
  };

  const handleClick = async() => {
    await loadMedicoByNum()
    setShow(true)
  }

  const getMedicoByNum = async() => {
    try {
      const response = await Axios.get(`http://localhost:3000/api/v1/medicos/${inputText}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const loadMedicoByNum = async () => {
    setResponseData(await getMedicoByNum())
  }

  /*useEffect(() => {
    loadMedicoByNum()
    setShow(true)
  }, [])*/
  
  return (
    <div className={styles}>
      <Navbar />
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
      {
        show?
        <ShowAll json={responseData}/>
        :null
      }
    </div>
  )
}

Expediente.propTypes = {
  letter: PropTypes.string
}

export default Expediente
