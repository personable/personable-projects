import React, { Component, PropTypes } from 'react'
import './ProjectsActionLink.css'
import Icon from '../Icon/Icon'

class ProjectsActionLink extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    prompt: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['ExternalLink', 'CodePen', 'Mail']),
    desktopUI: PropTypes.bool
  }

  static defaultProps = {
    variant: 'ExternalLink'
  }

  render () {
    return (
      <a
        href={this.props.src}
        className={(this.props.desktopUI)
          ? 'ProjectsActionLink ProjectsActionLink--desktopUI' : 'ProjectsActionLink'
        }
      >
        <Icon name={this.props.variant} color="active" size="small" />
        <span className="ProjectsActionLinkText">{this.props.prompt}</span>
      </a>
    )
  }
}

export default ProjectsActionLink
