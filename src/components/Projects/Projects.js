import React, { Component, PropTypes } from 'react'
import Page from '../Page/Page'
import ProjectsNavButton from '../ProjectsNavButton/ProjectsNavButton'
import FocusTrap from 'focus-trap-react'
import './Projects.css'

class Projects extends Component {
  static propTypes = {
    projectData: PropTypes.array.isRequired
  }

  constructor (props) {
    super(props)

    this.closeProject = this.closeProject.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.returnActiveLink = this.returnActiveLink.bind(this)

    this.state = {
      activeIndex: 0,
      showingNav: false
    }
  }

  componentDidMount () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize () {
    const width = window.innerWidth

    if (width >= 1024) {
      this.setState({
        desktopUI: true,
        showingNav: false
      })
    } else {
      this.setState({
        desktopUI: false
      })
    }
  }

  returnActiveLink () {
    return document.getElementById(`ProjectsNavButton${this.state.activeIndex}`)
  }

  renderProject (index) {
    if (this.state.desktopUI) {
      if (index !== this.state.activeIndex) {
        this.setState({
          activeIndex: index
        })
      }
      setTimeout(() => document.getElementById(`ProjectsHeading${this.state.activeIndex}`).focus(), 100)
    } else {
      this.setState({
        activeIndex: index,
        showingNav: false
      })
      setTimeout(() => document.getElementById(`ProjectsHeading${this.state.activeIndex}`).focus(), 100)
    }
  }

  closeProject () {
    if (this.state.desktopUI) {
      this.returnActiveLink().focus()
    } else {
      this.setState({
        showingNav: true
      })
    }
  }

  renderContent () {
    const {
      projectData
    } = this.props

    const isCodePen = projectData[this.state.activeIndex].isCodePen

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
        action={{
          src: projectData[this.state.activeIndex].action.src,
          prompt: projectData[this.state.activeIndex].action.prompt,
          variant: (isCodePen) ? 'CodePen' : 'ExternalLink'
        }}
        items={projectData[this.state.activeIndex].items}
        isCodePen={isCodePen}
        year={projectData[this.state.activeIndex].year}
        details={projectData[this.state.activeIndex].details}
        id={this.state.activeIndex}
        closePage={this.closeProject}
        desktopUI={this.state.desktopUI}
      />
    )
  }

  renderNavWrapper () {
    if (this.state.desktopUI) {
      return (
        <div className="ProjectsNavDesktop" aria-label="Projects Navigation">
          {this.renderNavList()}
        </div>
      )
    } else {
      if (this.state.showingNav) {
        return (
          <div className="ProjectsNavSmallScreens" aria-label="Projects Navigation">
            <FocusTrap
              focusTrapOptions={{
                initialFocus: this.returnActiveLink,
                pause: !this.state.showingNav
              }}
            >
              {this.renderNavList()}
            </FocusTrap>
          </div>
        )
      }
    }
  }

  renderNavList () {
    return (
      <nav className="ProjectsNavMenu">
        <ul className="ProjectsNavMenuList">
          {this.renderButtons()}
        </ul>
      </nav>
    )
  }

  renderButtons () {
    return (
      this.props.projectData.map((project, index) =>
        <li className="ProjectsNavMenuListItem" key={index}>
          <ProjectsNavButton
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
            desktopUI={this.state.desktopUI}
          />
        </li>
      )
    )
  }

  render () {
    return (
      <section
        className={
          (this.state.desktopUI) ? 'Projects Projects--desktopUI' : 'Projects'
        }
      >
        <div className="ProjectsLayout">
          {this.renderNavWrapper()}
          <div className="ProjectsStage">
            {this.renderContent()}
          </div>
        </div>
      </section>
    )
  }
}

export default Projects
