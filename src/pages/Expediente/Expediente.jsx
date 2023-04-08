import React from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Navbar, ShowAll } from '../../components'

import { styles, inputs, bloques } from './Expediente.module.css'

const Expediente = () => {
  
  const [responseData, setResponseData] = useState(null)
  const [responseData1, setResponseData1] = useState(null)
  const [inputText, setInputText] = useState("");
  const [show, setShow] = useState(false)

  const handleChange = (valor) => {
    // 👇 Store the input value to local state
    setInputText(valor.target.value);
  };

  const handleClick = async() => {
    await loadMedicoByNum()
    await loadMedicos()
    console.log(responseData1)
    setShow(true)
  }

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
    setResponseData1(await getMedicos())
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
  
  return (
    <div className={styles}>
      <Navbar />
      <div className={inputs}>
        <input type="text" onChange={handleChange} placeholder='Ingrese el dpi del paciente'/>
        <button onClick={handleClick}>Submit</button>
      </div>
      <div className={bloques}>
        {
          show?
          <ShowAll json={responseData}/>
          :null
        }
        {
          show?
          <ShowAll json={responseData1}/>
          :null
        }
      </div>
    </div>
  )
}

Expediente.propTypes = {
  letter: PropTypes.string
}

export default Expediente
