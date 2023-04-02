import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './SignIn.module.css'

const SignIn = () => {
  console.log('SignIn')
  return (
    <div className={styles}>PAGE SignIn</div>
  )
}

SignIn.propTypes = {
  letter: PropTypes.string
}

export default SignIn
