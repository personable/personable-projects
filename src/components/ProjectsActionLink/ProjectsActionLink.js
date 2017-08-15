import React, { Component, PropTypes } from 'react'
import './ProjectsActionLink.css'
import Icon from '../Icon/Icon'

class ProjectsActionLink extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    prompt: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['external', 'codepen']),
    desktopUI: PropTypes.bool
  }

  static defaultProps = {
    variant: 'external'
  }

  renderIcon () {
    if (this.props.variant === 'codepen') {
      return 'CodePen'
    } else {
      return 'ExternalLink'
    }
  }

  render () {
    return (
      <a
        href={this.props.src}
        className={(this.props.desktopUI)
          ? 'ProjectsActionLink ProjectsActionLink--desktopUI' : 'ProjectsActionLink'
        }
      >
        <Icon name={this.renderIcon()} color="active" size="small" />
        <span className="ProjectsActionLinkText">{this.props.prompt}</span>
      </a>
    )
  }
}

export default ProjectsActionLink
