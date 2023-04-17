import React from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

import { styles } from './SignIn.module.css'

const SignIn = () => {

  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [num_colegiado, setNum_colegiado] = useState("");
  //const [lugarid, setLugarid] = useState("");
  var lugarid
  const history = useHistory()

  const handleChangeCorreo = (valor) => {
    // 👇 Store the input value to local state
    setCorreo(valor.target.value);
  };

  const handleChangeContraseña = (valor) => {
    // 👇 Store the input value to local state
    setContraseña(valor.target.value);
  };

  const handleChangeNum = (valor) => {
    // 👇 Store the input value to local state
    setNum_colegiado(valor.target.value);
  };

  const getUserLugarid = async() => {
    try {
      const response = await Axios.get(`http://localhost:3000/api/v1/usuarios/get_lugarid/${num_colegiado}`)
      const jason = response.data
      {jason.map((row, index) => {
        lugarid = row.lugarid
      })}
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const addUser = async() => {
    try {
      const response = await Axios.post(`http://localhost:3000/api/v1/usuarios/${correo}&${contraseña}&${num_colegiado}&${lugarid}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const handleClick = async() => {
    await getUserLugarid()
    
    await addUser()
    history.push("/interfazmedico", {lugarid: lugarid, num: num_colegiado})
  }

  return (
    <div className={styles}>
      <h1>Sign In</h1>
      <h2>Correo</h2>
      <input type="text" placeholder="Escriba su correo" onChange={handleChangeCorreo}/>
      <h2>Contraseña</h2>
      <input type="text" placeholder="Escriba su contraseña" onChange={handleChangeContraseña}/>
      <h2>Numero de colegiado</h2>
      <input type="text" placeholder="Escriba el numero" onChange={handleChangeNum}/>
      <br />
      <button onClick={handleClick}>Registrarse</button>
      <br />
      <Link to="/login">Ingresa</Link>
    </div>
  )
}

SignIn.propTypes = {
  letter: PropTypes.string
}

export default SignIn
