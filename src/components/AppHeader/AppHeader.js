import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './AppHeader.css'
import LogoLink from '../LogoLink/LogoLink'

class AppHeader extends Component {
  render () {
    return (
      <header className="AppHeader">
        <div className="AppHeader__Primary">
          <LogoLink />
        </div>
        <nav className="AppHeader__Secondary">
          <ul className="AppNav">
            <li className="AppNav__ListItem">
              <NavLink
                exact
                to="/"
                className="AppNav__Link"
                activeClassName="AppNav__Link--Active">
                  Projects
              </NavLink>
            </li>
            <li className="AppNav__ListItem">
              <NavLink
                exact
                to="/about"
                className="AppNav__Link"
                activeClassName="AppNav__Link--Active">
                  About
              </NavLink>
            </li>
            <li className="AppNav__ListItem">
              <a href="http://codepen.io/personable"
                className="AppNav__Link">
                CodePen
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default AppHeader
