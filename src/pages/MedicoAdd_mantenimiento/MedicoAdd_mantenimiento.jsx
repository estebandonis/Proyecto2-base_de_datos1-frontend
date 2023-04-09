import React from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { ShowAll, Navbar_mantenimiento } from '../../components'

import { styles } from './MedicoAdd_mantenimiento.module.css'

const MedicoAdd_mantenimiento = () => {

  const [nombre, setNombre] = useState(null)
  const [apellido, setApellido] = useState(null)
  const [direccion, setDireccion] = useState(null)
  const [telefono, setTelefono] = useState(null)
  const [num_colegiado, setNum_colegiado] = useState(null)
  const [especialidad, setEspecialidad] = useState(null)
  const [lugarid, setLugarid] = useState(null)

  const handleChangeNombre = (valor) => {
    // 👇 Store the input value to local state
    setNombre(valor.target.value);
  };

  const handleChangeApellido = (valor) => {
    // 👇 Store the input value to local state
    setApellido(valor.target.value);
  };

  const handleChangeDireccion = (valor) => {
    // 👇 Store the input value to local state
    setDireccion(valor.target.value);
  };

  const handleChangeTelefono = (valor) => {
    // 👇 Store the input value to local state
    setTelefono(valor.target.value);
  };

  const handleChangeNum = (valor) => {
    // 👇 Store the input value to local state
    setNum_colegiado(valor.target.value);
  };

  const handleChangeEspecialidad = (valor) => {
    // 👇 Store the input value to local state
    setEspecialidad(valor.target.value);
  };

  const handleChangeLugarId = (valor) => {
    // 👇 Store the input value to local state
    setLugarid(valor.target.value);
  };

  const agregarDoctor = async() => {
    try {
      const response = await Axios.post(`http://localhost:3000/api/v1/medicos/${nombre}&${apellido}&${direccion}&${telefono}&${num_colegiado}&${especialidad}&${lugarid}`)
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  const handleClick = async() => {
    await agregarDoctor()
  }

  return (
    <div className={styles}>
      <Navbar_mantenimiento />
      <h2>Nombre</h2>
      <input type="text" placeholder="Escriba el numero de colegiado" onChange={handleChangeNombre}/>
      <br />

      <h2>Apellido</h2>
      <input type="text" placeholder="Escriba el numero de colegiado" onChange={handleChangeApellido}/>
      <br />

      <h2>Direccion</h2>
      <input type="text" placeholder="Escriba el numero de colegiado" onChange={handleChangeDireccion}/>
      <br />

      <h2>Telefono</h2>
      <input type="text" placeholder="Escriba el numero de colegiado" onChange={handleChangeTelefono}/>
      <br />

      <h2>Numero de colegiado</h2>
      <input type="text" placeholder="Escriba el numero de colegiado" onChange={handleChangeNum}/>
      <br />

      <h2>Especialidad</h2>
      <input type="text" placeholder="Escriba el numero de colegiado" onChange={handleChangeEspecialidad}/>
      <br />

      <h2>Lugarid</h2>
      <input type="text" placeholder="Escriba el numero de colegiado" onChange={handleChangeLugarId}/>
      <br />
      <button onClick={handleClick}>Agregar</button>
    </div>
  )
}

MedicoAdd_mantenimiento.propTypes = {
  letter: PropTypes.string
}

export default MedicoAdd_mantenimiento