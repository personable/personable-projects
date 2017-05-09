import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './LogoLink.css'

class LogoLink extends Component {
  render () {
    return (
      <Link to="/" className="LogoLink">
        <span className="sr">Personable Design and Development: Link to homepage</span>
        <Logo />
      </Link>
    )
  }
}

export default LogoLink
