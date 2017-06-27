import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './AppHeader.css'
import LogoLink from '../LogoLink/LogoLink'
import Icon from '../Icon/Icon'

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
                title="Projects"
                className="AppNav__Link"
                activeClassName="AppNav__Link--Active">
                  Projects
              </NavLink>
            </li>
            <li className="AppNav__ListItem">
              <NavLink
                exact
                to="/about"
                title="About"
                className="AppNav__Link"
                activeClassName="AppNav__Link--Active">
                  About
              </NavLink>
            </li>
            <li className="AppNav__ListItem AppNav__ListItem--Icon">
              <a href="http://codepen.io/personable"
                title="My CodePen"
                className="AppNav__Link">
                <Icon name="CodePen" label="My CodePen" />
              </a>
            </li>
            <li className="AppNav__ListItem AppNav__ListItem--Icon">
              <a href="https://github.com/personable"
                title="My GitHub"
                className="AppNav__Link">
                <Icon name="GitHub" label="My GitHub" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default AppHeader
