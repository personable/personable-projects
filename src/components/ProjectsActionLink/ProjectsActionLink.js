import React, { Component, PropTypes } from 'react'
import './ProjectsActionLink.css'

class ProjectsActionLink extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    prompt: PropTypes.string.isRequired
  }

  render () {
    return (
      <a
        href={this.props.src}
        className="ProjectsActionLink"
      >
        {this.props.prompt}
      </a>
    )
  }
}

export default ProjectsActionLink
