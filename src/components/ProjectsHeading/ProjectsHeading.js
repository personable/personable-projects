import React, { Component, PropTypes } from 'react'
import { gradient } from '../../util/gradient'
import './ProjectsHeading.css'

class ProjectsHeading extends Component {
  static propTypes = {
    text: PropTypes.node.isRequired,
    id: PropTypes.string,
    color: PropTypes.string,
    desktopUI: PropTypes.bool
  }

  render () {
    const background = {
      background: gradient(this.props.color, 'linear-alpha')
    }

    return (
      <header
        className={(this.props.desktopUI)
          ? 'ProjectsHeading ProjectsHeading--desktopUI' : 'ProjectsHeading'}
      >
        <div className="ProjectsHeadingLayout">
          <h1
            className="ProjectsHeadingHeadline"
            tabIndex="-1"
            id={this.props.id}
            style={(this.props.desktopUI) ? background : null}
          >
            {this.props.text}
          </h1>
        </div>
      </header>
    )
  }
}

export default ProjectsHeading
