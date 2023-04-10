import React from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { ShowAllUsuarios, Navbar_mantenimiento } from '../../components'

import { styles } from './UsuarioUpdate_mantenimiento.module.css'

const UsuarioUpdate_mantenimiento = () => {

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

  const handleClickCorreo = async() => {
    await updateCorreo()
    await loadUsuarios()
  }

  const updateCorreo = async() => {
    try {
      const response = await Axios.put(`http://localhost:3000/api/v1/usuarios/update_correo/${data}&${num_colegiado}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const handleClickContraseña = async() => {
    await updateContraseña()
    await loadUsuarios()
  }

  const updateContraseña = async() => {
    try {
      const response = await Axios.put(`http://localhost:3000/api/v1/usuarios/update_password/${data}&${num_colegiado}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const handleClickNum_colegiado = async() => {
    await updateNum_colegiado()
    await loadUsuarios()
  }

  const updateNum_colegiado = async() => {
    try {
      const response = await Axios.put(`http://localhost:3000/api/v1/usuarios/update_num/${data}&${num_colegiado}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const handleClickLugarId = async() => {
    await updateLugarId()
    await loadUsuarios()
  }

  const updateLugarId = async() => {
    try {
      const response = await Axios.put(`http://localhost:3000/api/v1/usuarios/update_lugarid/${data}&${num_colegiado}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const getUsuarios = async() => {
    try {
      const response = await Axios.get("http://localhost:3000/api/v1/usuarios/")
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const loadUsuarios = async () => {
    setResponseData(await getUsuarios())
  }

  useEffect(() => {
    loadUsuarios()
  }, [])

  if (!responseData) {
    return 'Loading...'
  }

  return (
    <div className={styles}>
      <Navbar_mantenimiento />
      <ShowAllUsuarios json={responseData}/>

      <h2>Cambiar correo</h2>
      <input type="text" placeholder="Escriba el numero de colegiado" onChange={handleChangeNum}/>
      <br />
      <input type="text" placeholder="Escriba el nuevo correo" onChange={handleChangeData}/>
      <br />
      <button onClick={handleClickCorreo}>Cambiar</button>

      <h2>Cambiar contraseña</h2>
      <input type="text" placeholder="Escriba el numero de colegiado" onChange={handleChangeNum}/>
      <br />
      <input type="text" placeholder="Escriba el nuevo apellido" onChange={handleChangeData}/>
      <br />
      <button onClick={handleClickContraseña}>Cambiar</button>

      <h2>Cambiar numero de colegiado</h2>
      <input type="text" placeholder="Escriba el numero de colegiado actual" onChange={handleChangeNum}/>
      <br />
      <input type="text" placeholder="Escriba el nuevo numero de colegiado actual" onChange={handleChangeData}/>
      <br />
      <button onClick={handleClickNum_colegiado}>Cambiar</button>

      <h2>Cambiar numero de colegiado</h2>
      <input type="text" placeholder="Escriba el numero de colegiado actual" onChange={handleChangeNum}/>
      <br />
      <input type="text" placeholder="Escriba el nuevo numero de colegiado actual" onChange={handleChangeData}/>
      <br />
      <button onClick={handleClickNum_colegiado}>Cambiar</button>

      <h2>Cambiar id del lugar de trabajo</h2>
      <input type="text" placeholder="Escriba el numero de colegiado actual" onChange={handleChangeNum}/>
      <br />
      <input type="text" placeholder="Escriba el nuevo id del lugar" onChange={handleChangeData}/>
      <br />
      <button onClick={handleClickLugarId}>Cambiar</button>
    </div>
  )
}

UsuarioUpdate_mantenimiento.propTypes = {
  letter: PropTypes.string
}

export default UsuarioUpdate_mantenimiento
