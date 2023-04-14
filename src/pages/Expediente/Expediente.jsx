import React from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { ShowAllPacientes, ShowAllExamenes, ShowAllCirugias, ShowAllMedicosPaciente, ShowAllMedicamentos } from '../../components'

import { styles, inputs, bloques } from './Expediente.module.css'

const Expediente = () => {
  
  const [responseData, setResponseData] = useState(null)
  const [examenes, setExamenes] = useState(null)
  const [cirugias, setCirugias] = useState(null)
  const [medicos, setMedicos] = useState(null)
  const [medicamentos, setMedicamentos] = useState(null)
  const [inputText, setInputText] = useState("")
  const [show, setShow] = useState(false)

  const getPacientesByDPI = async() => {
    try {
      const response = await Axios.get(`http://localhost:3000/api/v1/pacientes/${inputText}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const loadPacienteByDPI = async () => {
    setResponseData(await getPacientesByDPI())
  }

  const getExamenes = async() => {
    try {
      const response = await Axios.get(`http://localhost:3000/api/v1/visitas/get_examenes/${inputText}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const loadExamenes = async () => {
    setExamenes(await getExamenes())
  }

  const getCirugias = async() => {
    try {
      const response = await Axios.get(`http://localhost:3000/api/v1/visitas/get_cirugias/${inputText}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const loadCirugias = async () => {
    setCirugias(await getCirugias())
  }
  
  const getMedicos = async() => {
    try {
      const response = await Axios.get(`http://localhost:3000/api/v1/visitas/get_medicosOfPaciente/${inputText}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const loadMedicos = async () => {
    setMedicos(await getMedicos())
  }

  const getMedicamentos = async() => {
    try {
      const response = await Axios.get(`http://localhost:3000/api/v1/visitas/get_medicamentosYevolucion/${inputText}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const loadMedicamentos = async () => {
    setMedicamentos(await getMedicamentos())
  }

  const handleChange = (valor) => {
    // 👇 Store the input value to local state
    setInputText(valor.target.value)
  };

  const handleClick = async() => {
    await loadPacienteByDPI()
    await loadExamenes()
    await loadCirugias()
    await loadMedicos()
    await loadMedicamentos()
    setShow(true)
  }

  return (
    <div className={styles}>
      <div className={inputs}>
        <input type="text" onChange={handleChange} placeholder='Ingrese el dpi del paciente'/>
        <button onClick={handleClick}>Submit</button>
      </div>
      <div className={bloques}>
      <h2>Datos Paciente</h2>
        {
          show?
          <ShowAllPacientes json={responseData}/>
          :null
        }
      <h2>Examenes Paciente</h2>
        {
          show?
          <ShowAllExamenes json={examenes}/>
          :null
        }
      <h2>Cirugías practicadas</h2>
        {
          show?
          <ShowAllCirugias json={cirugias}/>
          :null
        }
      <h2>Medicos que trataron al paciente</h2>
        {
          show?
          <ShowAllMedicosPaciente json={medicos}/>
          :null
        }
      <h2>Medicamentos y evolucion</h2>
        {
          show?
          <ShowAllMedicamentos json={medicamentos}/>
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
