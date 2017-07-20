import React, { Component, PropTypes } from 'react'
import Page from '../Page/Page'
import ProjectButton from '../ProjectButton/ProjectButton'
import './Projects.css'

class Projects extends Component {
  static propTypes = {
    projectData: PropTypes.array.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      activeIndex: 0
    }
  }

  renderButtons () {
    return (
      this.props.projectData.map((project, index) =>
        <ProjectButton
          key={index}
          label={project.name}
          color={project.color}
          active={index === this.state.activeIndex}
          // eslint-disable-next-line
          onClick={() => this.renderProject(index)}
        />
      )
    )
  }

  renderProject (index) {
    if (this.state.activeIndex !== index) {
      this.setState({
        activeIndex: index
      })
    }
  }

  render () {
    const {
      projectData
    } = this.props

    return (
      <div>
        {this.renderButtons()}
        <Page
          key={`page(${this.state.activeIndex})`}
          heading={projectData[this.state.activeIndex].name}
          color={projectData[this.state.activeIndex].color}
          media={{
            src: projectData[this.state.activeIndex].media.src,
            img: projectData[this.state.activeIndex].media.img,
            alt: projectData[this.state.activeIndex].media.alt
          }}
          items={projectData[this.state.activeIndex].items}
          year={projectData[this.state.activeIndex].year}
          details={projectData[this.state.activeIndex].details}
          projectID={this.state.activeIndex}
        />
      </div>
    )
  }
}

export default Projects
