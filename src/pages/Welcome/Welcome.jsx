import React from 'react'
import PropTypes from 'prop-types'
import { Navbar } from '../../components'

import { styles } from './Welcome.module.css'

const Welcome = () => {
  console.log('Welcome')
  return (
    <div className={styles}>
      PAGE Welcome
       <Navbar />
    </div>
  )
}

Welcome.propTypes = {
  letter: PropTypes.string
}

export default Welcome
