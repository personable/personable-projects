import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./ProjectsActionLink.css";
import Icon from "../Icon/Icon";

class ProjectsActionLink extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    prompt: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["ExternalLink", "CodePen", "Mail"]),
    screens: PropTypes.object,
  };

  static defaultProps = {
    variant: "ExternalLink",
  };

  render() {
    return (
      <a
        href={this.props.src}
        className={classnames({
          ProjectsActionLink: true,
          "ProjectsActionLink--desktopUI": this.props.screens.desktop,
        })}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name={this.props.variant} color="active" size="small" />
        <span className="ProjectsActionLinkText">{this.props.prompt}</span>
      </a>
    );
  }
}

export default ProjectsActionLink;
