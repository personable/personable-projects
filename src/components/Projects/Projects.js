import React, { Component, PropTypes } from 'react'
import Page from '../Page/Page'
import ProjectsNavButton from '../ProjectsNavButton/ProjectsNavButton'
// import FocusTrap from 'focus-trap-react'
import './Projects.css'

class Projects extends Component {
  static propTypes = {
    projectData: PropTypes.array.isRequired
  }

  constructor (props) {
    super(props)

    this.closeProject = this.closeProject.bind(this)

    this.state = {
      activeIndex: 0,
      showingProject: true,
      navHasFocus: false
      // activeTrap: false
    }
  }

  componentDidMount () {
    document.addEventListener('focus', function (event) {
      const nav = document.getElementById('navvy')
      if (nav.contains(event.target)) {
      } else {
      }
    }, true)
  }

  renderButtons () {
    return (
      this.props.projectData.map((project, index) =>
        <ProjectsNavButton
          key={index}
          label={
            <span>
              <span className="sr">
                {
                  (index === this.state.activeIndex)
                  ? 'Current project: ' : 'Open project: '
                }
              </span>
              {project.name}
            </span>
          }
          color={project.color}
          active={index === this.state.activeIndex}
          // eslint-disable-next-line
          onClick={() => this.renderProject(index)}
          id={`ProjectsNavButton${index}`}
        />
      )
    )
  }

  renderProject (index) {
    if (this.state.activeIndex !== index) {
      this.setState({
        activeIndex: index,
        showingProject: true
        // activeTrap: false
      })
    }
  }

  closeProject () {
    this.setState({
      showingProject: false
      // activeTrap: true
    })
    document.getElementById(`ProjectsNavButton${this.state.activeIndex}`).focus()
  }

  renderContent () {
    const {
      projectData
    } = this.props

    return (
      <Page
        key={`page(${this.state.activeIndex})`}
        heading={
          <span>
            <span className="sr">This is the project page for: </span>
            {projectData[this.state.activeIndex].name}
          </span>
        }
        title={`${projectData[this.state.activeIndex].name}: Personable Design & Development`}
        color={projectData[this.state.activeIndex].color}
        media={{
          src: projectData[this.state.activeIndex].media.src,
          img: projectData[this.state.activeIndex].media.img,
          alt: projectData[this.state.activeIndex].media.alt
        }}
        items={projectData[this.state.activeIndex].items}
        year={projectData[this.state.activeIndex].year}
        details={projectData[this.state.activeIndex].details}
        id={this.state.activeIndex}
        closePage={this.closeProject}
      />
    )
  }

  render () {
    return (
      <section
        className={
          (this.state.showingProject && !this.state.navHasFocus)
            ? 'Projects Projects--showingProject' : 'Projects'
        }
      >
        <div className="ProjectsLayout">
          <div className="ProjectsNav" aria-label="Projects Navigation">
            <nav id="navvy">
              {this.renderButtons()}
            </nav>
          </div>
          <div className="ProjectsStage">
            {this.renderContent()}
          </div>
        </div>
      </section>
    )
  }
}

export default Projects
