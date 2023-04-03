import React from 'react'
import PropTypes from 'prop-types'
import { useHistory, Link } from 'react-router-dom'

import { styles } from './Navbar.module.css'

const Navbar = () => {
  console.log('Navbar')
  return (
    <div className={styles}>
      <nav>
        <Link to="/login">LOGIN  </Link>

        <Link to="/signin">SIGNIN</Link>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  letter: PropTypes.string
}

export default Navbar
