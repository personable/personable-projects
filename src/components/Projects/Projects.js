import React, { Component, PropTypes } from 'react'
import Page from '../Page/Page'
import './Projects.css'

class Projects extends Component {
  static propTypes = {
    projectData: PropTypes.array.isRequired
  }

  render () {
    return (
      <Page heading="Projects" color="rebeccapurple">Hi there, Projects!</Page>
    )
  }
}

export default Projects
