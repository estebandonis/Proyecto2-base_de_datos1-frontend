import React from 'react'
import PropTypes from 'prop-types'
import { useHistory, Link } from 'react-router-dom'

import { styles } from './LogIn.module.css'

const LogIn = () => {
  console.log('LogIn')
  return (
    <div className={styles}>
      PAGE LogIn
      <Link to="/signin">GO TO SIGNIN</Link>
    </div>
  )
}

LogIn.propTypes = {
  letter: PropTypes.string
}

export default LogIn
