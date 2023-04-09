import React from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { ShowAll, Navbar_mantenimiento } from '../../components'

import { styles } from './MedicoUpdate_mantenimiento.module.css'

const MedicoUpdate_mantenimiento = () => {

  const [responseData, setResponseData] = useState(null)
  const [num_colegiado, setNum_colegiado] = useState(null)
  const [data, setData] = useState(null)

  const handleChangeNum = (valor) => {
    // 👇 Store the input value to local state
    setNum_colegiado(valor.target.value);
  };

  const handleChangeData = (valor) => {
    // 👇 Store the input value to local state
    setData(valor.target.value);
  };

  const handleClickName = async() => {
    await updateName()
    await loadMedicos()
  }

  const updateName = async() => {
    try {
      const response = await Axios.put(`http://localhost:3000/api/v1/medicos/cambiar_nombre/${num_colegiado}&${data}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const handleClickApellido = async() => {
    await updateApellido()
    await loadMedicos()
  }

  const updateApellido = async() => {
    try {
      const response = await Axios.put(`http://localhost:3000/api/v1/medicos/cambiar_apellido/${num_colegiado}&${data}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const handleClickDireccion = async() => {
    await updateDireccion()
    await loadMedicos()
  }

  const updateDireccion = async() => {
    try {
      const response = await Axios.put(`http://localhost:3000/api/v1/medicos/cambiar_direccion/${num_colegiado}&${data}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const handleClickTelefono = async() => {
    await updateTelefono()
    await loadMedicos()
  }

  const updateTelefono = async() => {
    try {
      const response = await Axios.put(`http://localhost:3000/api/v1/medicos/cambiar_telefono/${num_colegiado}&${data}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const handleClickEspecialidad = async() => {
    await updateEspecialidad()
    await loadMedicos()
  }

  const updateEspecialidad = async() => {
    try {
      const response = await Axios.put(`http://localhost:3000/api/v1/medicos/cambiar_especialidad/${num_colegiado}&${data}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const handleClickLugarId = async() => {
    await updateLugarId()
    await loadMedicos()
  }

  const updateLugarId = async() => {
    try {
      const response = await Axios.put(`http://localhost:3000/api/v1/medicos/cambiar_lugarid/${num_colegiado}&${data}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const getMedicos = async() => {
    try {
      const response = await Axios.get("http://localhost:3000/api/v1/medicos/")
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

  return (
    <div className={styles}>
      <Navbar_mantenimiento />
      <ShowAll json={responseData}/>
      <h2>Cambiar nombre</h2>
      <input type="text" placeholder="Escriba el numero de colegiado" onChange={handleChangeNum}/>
      <br />
      <input type="text" placeholder="Escriba el nuevo nombre" onChange={handleChangeData}/>
      <br />
      <button onClick={handleClickName}>Cambiar</button>

      <h2>Cambiar apellido</h2>
      <input type="text" placeholder="Escriba el numero de colegiado" onChange={handleChangeNum}/>
      <br />
      <input type="text" placeholder="Escriba el nuevo apellido" onChange={handleChangeData}/>
      <br />
      <button onClick={handleClickApellido}>Cambiar</button>

      <h2>Cambiar direccion</h2>
      <input type="text" placeholder="Escriba el numero de colegiado" onChange={handleChangeNum}/>
      <br />
      <input type="text" placeholder="Escriba la nueva direccion" onChange={handleChangeData}/>
      <br />
      <button onClick={handleClickDireccion}>Cambiar</button>

      <h2>Cambiar telefono</h2>
      <input type="text" placeholder="Escriba el numero de colegiado" onChange={handleChangeNum}/>
      <br />
      <input type="text" placeholder="Escriba el nuevo telefono" onChange={handleChangeData}/>
      <br />
      <button onClick={handleClickTelefono}>Cambiar</button>

      <h2>Cambiar especialidad</h2>
      <input type="text" placeholder="Escriba el numero de colegiado" onChange={handleChangeNum}/>
      <br />
      <input type="text" placeholder="Escriba la nueva especialidad" onChange={handleChangeData}/>
      <br />
      <button onClick={handleClickEspecialidad}>Cambiar</button>

      <h2>Cambiar lugarid</h2>
      <input type="text" placeholder="Escriba el numero de colegiado" onChange={handleChangeNum}/>
      <br />
      <input type="text" placeholder="Escriba la nueva id del lugar" onChange={handleChangeData}/>
      <br />
      <button onClick={handleClickLugarId}>Cambiar</button>
    </div>
  )
}

MedicoUpdate_mantenimiento.propTypes = {
  letter: PropTypes.string
}

export default MedicoUpdate_mantenimiento
