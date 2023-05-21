import React from 'react'
import { Link } from 'react-router-dom'

import {
  styles,
  login,
  signin,
  all,
} from './Welcome.module.css'

const Welcome = () => {
  return (
    <dir className={all}>
      <div className={styles}>
        <Link to="/login" className={login}>Log In</Link>
        <Link to="/signin" className={signin}>Sign In</Link>
      </div>
    </dir>
  )
}

export default Welcome
