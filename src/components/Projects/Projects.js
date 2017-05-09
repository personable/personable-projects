import React, { Component, PropTypes } from 'react'
// import { gradient } from './util/gradient'
import './Projects.css'

class Projects extends Component {
  static propTypes = {
    projectData: PropTypes.array.isRequired
  }

  render () {
    // document.documentElement.style.setProperty('--color-active', 'red')
    // const headerStyles = {
    //   background: gradient(this.props.color)
    // }
    return (
      <div>
        {this.props.projectData[0].name}
      </div>
    )
  }
}

export default Projects
