import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import "./AppHeader.css";
import LogoLink from "../LogoLink/LogoLink";
import Icon from "../Icon/Icon";

class AppHeader extends Component {
  static propTypes = {
    screens: PropTypes.object,
  };

  render() {
    return (
      <header
        className={classnames({
          AppHeader: true,
          "AppHeader--tabletUI": this.props.screens.tablet,
          "AppHeader--desktopUI": this.props.screens.desktop,
        })}
        aria-label="Main site navigation"
      >
        <div className="AppHeader__Primary">
          <LogoLink screens={this.props.screens} />
        </div>
        <nav className="AppHeader__Secondary">
          <ul className="AppNav">
            <li className="AppNav__ListItem">
              <NavLink
                exact
                to="/"
                title="About"
                className="AppNav__Link"
                activeClassName="AppNav__Link--Active"
              >
                About
              </NavLink>
            </li>
            <li className="AppNav__ListItem">
              <NavLink
                exact
                to="/projects"
                title="Projects"
                className="AppNav__Link"
                activeClassName="AppNav__Link--Active"
              >
                Projects
              </NavLink>
            </li>
            <li className="AppNav__ListItem AppNav__ListItem--Icon">
              <a
                href="http://codepen.io/personable"
                title="My CodePen"
                className="AppNav__Link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="CodePen" label="My CodePen" />
              </a>
            </li>
            <li className="AppNav__ListItem AppNav__ListItem--Icon">
              <a
                href="https://github.com/personable"
                title="My GitHub"
                className="AppNav__Link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="GitHub" label="My GitHub" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default AppHeader;
