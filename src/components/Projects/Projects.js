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
      activeIndex: 0,
      showingProject: true
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
          id={`ProjectButton${index}`}
        />
      )
    )
  }

  renderProject (index) {
    if (this.state.activeIndex !== index) {
      this.setState({
        activeIndex: index,
        focusedEl: document.activeElement
      })
      if (!this.state.showingProject) {
        this.setState({
          showingProject: true
        })
      }
      document.getElementById('closer').focus()
    }
  }

  closeProject () {
    this.setState({
      showingProject: false
    })

    if (this.state.focusedEl) {
      this.state.focusedEl.focus()
    } else {
      document.getElementById('ProjectButton0').focus()
    }
  }

  renderContent () {
    const {
      projectData
    } = this.props

    return (
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
    )
  }

  render () {
    return (
      <section
        className={
          (this.state.showingProject)
            ? 'Projects Projects--showingProject' : 'Projects'
        }
      >
        <div className="ProjectsLayout">
          <nav className="ProjectsNav">
            {this.renderButtons()}
          </nav>
          <div className="ProjectsStage">
            <button
              id="closer"
              type="button"
              // eslint-disable-next-line
              onClick={() => this.closeProject()}
              style={{padding: '12px', fontSize: '12px', background: 'transparent'}}
            >
              Close
            </button>
            {this.renderContent()}
          </div>
        </div>
      </section>
    )
  }
}

export default Projects
