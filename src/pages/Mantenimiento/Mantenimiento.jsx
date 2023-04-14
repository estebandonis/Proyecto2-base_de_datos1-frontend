import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import MedicoUpdate_mantenimiento from '../MedicoUpdate_mantenimiento'
import MedicoAdd_mantenimiento from '../MedicoAdd_mantenimiento'
import PacienteAdd_mantenimiento from '../PacienteAdd_mantenimiento'
import PacienteUpdate_mantenimiento from '../PacienteUpdate_mantenimiento'
import UsuarioUpdate_mantenimiento from '../UsuarioUpdate_mantenimiento'
import UsuarioAdd_mantenimiento from '../UsuarioAdd_mantenimiento'

import { styles } from './Mantenimiento.module.css'

const Mantenimiento = () => {
  
  const [updateMedico, setUpdateMedico] = useState(true)
  const [addMedico, setAddMedico] = useState(false)
  const [updateUsuario, setUpdateUsuario] = useState(false)
  const [addUsuario, setAddUsuario] = useState(false)
  const [updatePaciente, setUpdatePaciente] = useState(false)
  const [addPaciente, setAddPaciente] = useState(false)
  
  const handleClickUpdateMedico = async() => {
    setUpdateMedico(true)
    setAddMedico(false)
    setUpdateUsuario(false)
    setAddUsuario(false)
    setUpdatePaciente(false)
    setAddPaciente(false)
  }

  const handleClickAddMedico = async() => {
    setUpdateMedico(false)
    setAddMedico(true)
    setUpdateUsuario(false)
    setAddUsuario(false)
    setUpdatePaciente(false)
    setAddPaciente(false)
  }

  const handleClickUpdateUsuario = async() => {
    setUpdateMedico(false)
    setAddMedico(false)
    setUpdateUsuario(true)
    setAddUsuario(false)
    setUpdatePaciente(false)
    setAddPaciente(false)
  }

  const handleClickAddUsuario = async() => {
    setUpdateMedico(false)
    setAddMedico(false)
    setUpdateUsuario(false)
    setAddUsuario(true)
    setUpdatePaciente(false)
    setAddPaciente(false)
  }

  const handleClickUpdatePaciente = async() => {
    setUpdateMedico(false)
    setAddMedico(false)
    setUpdateUsuario(false)
    setAddUsuario(false)
    setUpdatePaciente(true)
    setAddPaciente(false)
  }

  const handleClickAddPaciente = async() => {
    setUpdateMedico(false)
    setAddMedico(false)
    setUpdateUsuario(false)
    setAddUsuario(false)
    setUpdatePaciente(false)
    setAddPaciente(true)
  }

  return (
    <div className={styles}>
      <nav>
        <button onClick={handleClickUpdateMedico}>Actualizar Medico</button>
        <button onClick={handleClickAddMedico}>Agregar Medico</button>
        <button onClick={handleClickUpdateUsuario}>Actualizar Usuario</button>
        <button onClick={handleClickAddUsuario}>Agregar Usuario</button>
        <button onClick={handleClickUpdatePaciente}>Actualizar Paciente</button>
        <button onClick={handleClickAddPaciente}>Agregar Paciente</button>
      </nav>
      
      {
        addMedico?
        <MedicoAdd_mantenimiento />
        :null
      }
      {
        updateMedico?
        <MedicoUpdate_mantenimiento />
        :null
      }

      {
        addUsuario?
        <UsuarioAdd_mantenimiento />
        :null
      }
      {
        updateUsuario?
        <UsuarioUpdate_mantenimiento />
        :null
      }

      {
        addPaciente?
        <PacienteAdd_mantenimiento />
        :null
      }
      {
        updatePaciente?
        <PacienteUpdate_mantenimiento />
        :null
      }

    </div>
  )
}

Mantenimiento.propTypes = {
  letter: PropTypes.string
}

export default Mantenimiento
