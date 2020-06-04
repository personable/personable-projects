import React, { Component } from "react";
import PropTypes from "prop-types";
import { gradient } from "../../util/gradient";
import "./Background.css";

class Background extends Component {
  static propTypes = {
    color: PropTypes.string,
    desktopUI: PropTypes.bool,
    isProject: PropTypes.bool,
  };

  render() {
    return (
      <span
        className={
          this.props.desktopUI && this.props.isProject
            ? "Background Background--isProjectOnDesktopUI"
            : "Background"
        }
        style={{ background: this.props.color }}
        aria-hidden="true"
      >
        <span
          className="BackgroundInner"
          style={{ background: gradient(this.props.color, "radial") }}
        />
      </span>
    );
  }
}

export default Background;
