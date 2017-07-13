import React, { Component, PropTypes } from 'react'
import Page from '../Page/Page'
import './Projects.css'

class Projects extends Component {
  static propTypes = {
    projectData: PropTypes.array.isRequired
  }

  render () {
    return (
      <h1>Projects go here, you alllll</h1>
    )
  }
}

export default Projects
