import React from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { ShowAllPacientes } from '../../components'

import { styles } from './PacienteUpdate_mantenimiento.module.css'

const PacienteUpdate_mantenimiento = () => {

  const [responseData, setResponseData] = useState(null)
  const [dpi, setDPI] = useState(null)
  const [data, setData] = useState(null)

  const handleChangeNum = (valor) => {
    // 👇 Store the input value to local state
    setDPI(valor.target.value);
  };

  const handleChangeData = (valor) => {
    // 👇 Store the input value to local state
    setData(valor.target.value);
  };

  const handleClickName = async() => {
    await updateName()
    await loadPacientes()
  }

  const updateName = async() => {
    try {
      const response = await Axios.put(`http://localhost:3000/api/v1/pacientes/cambiar_nombre/${dpi}&${data}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const handleClickApellido = async() => {
    await updateApellido()
    await loadPacientes()
  }

  const updateApellido = async() => {
    try {
      const response = await Axios.put(`http://localhost:3000/api/v1/pacientes/cambiar_apellido/${dpi}&${data}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const handleClickDireccion = async() => {
    await updateDireccion()
    await loadPacientes()
  }

  const updateDireccion = async() => {
    try {
      const response = await Axios.put(`http://localhost:3000/api/v1/pacientes/cambiar_direccion/${dpi}&${data}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const handleClickTelefono = async() => {
    await updateTelefono()
    await loadPacientes()
  }

  const updateTelefono = async() => {
    try {
      const response = await Axios.put(`http://localhost:3000/api/v1/pacientes/cambiar_telefono/${dpi}&${data}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const handleClickMasaCorporal = async() => {
    await updateMasaCorporal()
    await loadPacientes()
  }

  const updateMasaCorporal = async() => {
    try {
      const response = await Axios.put(`http://localhost:3000/api/v1/pacientes/cambiar_masa_corporal/${dpi}&${data}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const handleClickAltura = async() => {
    await updateAltura()
    await loadPacientes()
  }

  const updateAltura = async() => {
    try {
      const response = await Axios.put(`http://localhost:3000/api/v1/pacientes/cambiar_altura/${dpi}&${data}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const handleClickPeso = async() => {
    await updatePeso()
    await loadPacientes()
  }

  const updatePeso = async() => {
    try {
      const response = await Axios.put(`http://localhost:3000/api/v1/pacientes/cambiar_peso/${dpi}&${data}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const handleClickAdiccion = async() => {
    await updateAdiccion()
    await loadPacientes()
  }

  const updateAdiccion = async() => {
    try {
      const response = await Axios.put(`http://localhost:3000/api/v1/pacientes/cambiar_adicciones/${dpi}&${data}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const handleClickEvolucion = async() => {
    await updateEvolucion()
    await loadPacientes()
  }

  const updateEvolucion = async() => {
    try {
      const response = await Axios.put(`http://localhost:3000/api/v1/pacientes/cambiar_evoluciones/${dpi}&${data}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const handleClickStatus = async() => {
    await updateStatus()
    await loadPacientes()
  }

  const updateStatus = async() => {
    try {
      const response = await Axios.put(`http://localhost:3000/api/v1/pacientes/cambiar_estatus/${dpi}&${data}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const getPacientes = async() => {
    try {
      const response = await Axios.get("http://localhost:3000/api/v1/pacientes/")
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const loadPacientes = async () => {
    setResponseData(await getPacientes())
  }

  useEffect(() => {
    loadPacientes()
  }, [])

  if (!responseData) {
    return 'Loading...'
  }

  return (
    <div className={styles}>
      <ShowAllPacientes json={responseData}/>
      <h2>Cambiar nombre</h2>
      <input type="text" placeholder="Escriba el DPI" onChange={handleChangeNum}/>
      <br />
      <input type="text" placeholder="Escriba el nuevo nombre" onChange={handleChangeData}/>
      <br />
      <button onClick={handleClickName}>Cambiar</button>

      <h2>Cambiar apellido</h2>
      <input type="text" placeholder="Escriba el DPI" onChange={handleChangeNum}/>
      <br />
      <input type="text" placeholder="Escriba el nuevo apellido" onChange={handleChangeData}/>
      <br />
      <button onClick={handleClickApellido}>Cambiar</button>

      <h2>Cambiar direccion</h2>
      <input type="text" placeholder="Escriba el DPI" onChange={handleChangeNum}/>
      <br />
      <input type="text" placeholder="Escriba la nueva direccion" onChange={handleChangeData}/>
      <br />
      <button onClick={handleClickDireccion}>Cambiar</button>

      <h2>Cambiar telefono</h2>
      <input type="text" placeholder="Escriba el DPI" onChange={handleChangeNum}/>
      <br />
      <input type="text" placeholder="Escriba el nuevo telefono" onChange={handleChangeData}/>
      <br />
      <button onClick={handleClickTelefono}>Cambiar</button>

      <h2>Cambiar Masa Corporal</h2>
      <input type="text" placeholder="Escriba el DPI" onChange={handleChangeNum}/>
      <br />
      <input type="text" placeholder="Escriba la nueva masa corporal" onChange={handleChangeData}/>
      <br />
      <button onClick={handleClickMasaCorporal}>Cambiar</button>

      <h2>Cambiar Altura</h2>
      <input type="text" placeholder="Escriba el DPI" onChange={handleChangeNum}/>
      <br />
      <input type="text" placeholder="Escriba la nueva altura" onChange={handleChangeData}/>
      <br />
      <button onClick={handleClickAltura}>Cambiar</button>

      <h2>Cambiar Peso</h2>
      <input type="text" placeholder="Escriba el DPI" onChange={handleChangeNum}/>
      <br />
      <input type="text" placeholder="Escriba el nuevo peso" onChange={handleChangeData}/>
      <br />
      <button onClick={handleClickPeso}>Cambiar</button>

      <h2>Cambiar Adicción</h2>
      <input type="text" placeholder="Escriba el DPI" onChange={handleChangeNum}/>
      <br />
      <input type="text" placeholder="Escriba la adicción" onChange={handleChangeData}/>
      <br />
      <button onClick={handleClickAdiccion}>Cambiar</button>

      <h2>Cambiar Evolucion</h2>
      <input type="text" placeholder="Escriba el DPI" onChange={handleChangeNum}/>
      <br />
      <input type="text" placeholder="Escriba la evolucion" onChange={handleChangeData}/>
      <br />
      <button onClick={handleClickEvolucion}>Cambiar</button>

      <h2>Cambiar Estatus</h2>
      <input type="text" placeholder="Escriba el DPI" onChange={handleChangeNum}/>
      <br />
      <input type="text" placeholder="Escriba el Estatus" onChange={handleChangeData}/>
      <br />
      <button onClick={handleClickStatus}>Cambiar</button>
    </div>
  )
}

PacienteUpdate_mantenimiento.propTypes = {
  letter: PropTypes.string
}

export default PacienteUpdate_mantenimiento
