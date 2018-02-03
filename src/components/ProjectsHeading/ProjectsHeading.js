import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
      <header className="ProjectsHeading">
        <div className="ProjectsHeadingLayout">
          <h1
            className="ProjectsHeadingHeadline"
            tabIndex="-1"
            id={this.props.id}
            style={background}
          >
            {this.props.text}
          </h1>
        </div>
      </header>
    )
  }
}

export default ProjectsHeading
