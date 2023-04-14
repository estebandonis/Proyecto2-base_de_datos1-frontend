import React from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { styles } from './LogIn.module.css'

const LogIn = () => {

  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const history = useHistory()

  const handleChangeCorreo = (valor) => {
    // 👇 Store the input value to local state
    setCorreo(valor.target.value);
  };

  const handleChangeContraseña = (valor) => {
    // 👇 Store the input value to local state
    setContraseña(valor.target.value);
  };

  const getTipo = async() => {
    try {
      const response = await Axios.get(`http://localhost:3000/api/v1/usuarios/${correo}&${contraseña}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const handleClick = async() => {
    const jason = await getTipo()
    var tipo
    var lugarid
    var num

    {jason.map((row, index) => {
      tipo = row.tipo
      lugarid = row.lugarid
      num = row.num_colegiado
    })}

    console.log(num)
    
    if (tipo == "administrador"){
      history.push("/mantenimiento", lugarid)
    }
    else {
      history.push("/interfazmedico", {lugarid: lugarid, num: num})
    }
  }

  return (
    <div className={styles}>
      <h1>Log In</h1>
      <h2>Correo</h2>
      <input type="text" placeholder="Escriba su correo" onChange={handleChangeCorreo} />
      <h2>Contraseña</h2>
      <input type="text" placeholder="Escriba su contraseña" onChange={handleChangeContraseña}/>
      <br />
      <button onClick={handleClick}>Ingresar</button>
      <br />
      <Link to="/signin">Registrate</Link>
    </div>
  )
}

LogIn.propTypes = {
  letter: PropTypes.string
}

export default LogIn
