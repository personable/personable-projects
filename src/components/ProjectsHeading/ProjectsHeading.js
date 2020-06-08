import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { gradient } from "../../util/gradient";
import "./ProjectsHeading.css";

class ProjectsHeading extends Component {
  static propTypes = {
    text: PropTypes.node.isRequired,
    id: PropTypes.string,
    color: PropTypes.string,
    textColor: PropTypes.string,
    screens: PropTypes.object,
  };

  render() {
    const background = {
      background: gradient(this.props.color, "linear-alpha"),
    };

    return (
      <header
        className={classnames({
          ProjectsHeading: true,
          "ProjectsHeading--tabletUI": this.props.screens.tablet,
          "ProjectsHeading--desktopUI": this.props.screens.desktop,
        })}
      >
        <div className="ProjectsHeadingLayout">
          <h1
            className="ProjectsHeadingHeadline"
            tabIndex="-1"
            id={this.props.id}
            style={this.props.screens.desktop ? background : null}
          >
            {this.props.text}
          </h1>
        </div>
      </header>
    );
  }
}

export default ProjectsHeading;
