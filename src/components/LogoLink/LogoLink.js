import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Logo from "../Logo/Logo";
import "./LogoLink.css";

class LogoLink extends Component {
  static propTypes = {
    screens: PropTypes.object,
  };

  render() {
    return (
      <Link
        to="/"
        className={classnames({
          LogoLink: true,
          "LogoLink--tabletUI": this.props.screens.tablet,
        })}
      >
        <span className="sr">
          Personable Design and Development: Link to homepage
        </span>
        <Logo />
      </Link>
    );
  }
}

export default LogoLink;
