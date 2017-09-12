import React, { Component, PropTypes } from 'react'
import marked from 'marked'
import { gradient } from '../../util/gradient'
import Checklist from '../Checklist/Checklist'
import Image from '../Image/Image'
import ProjectsActionLink from '../ProjectsActionLink/ProjectsActionLink'
import ProjectsHeading from '../ProjectsHeading/ProjectsHeading'
import Spinner from '../Spinner/Spinner'
import PageBackButton from '../PageBackButton/PageBackButton'

import './Page.css'

class Page extends Component {
  static propTypes = {
    heading: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    color: PropTypes.string.isRequired,
    media: PropTypes.shape({
      src: PropTypes.string,
      img: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    }),
    action: PropTypes.shape({
      src: PropTypes.string.isRequired,
      prompt: PropTypes.string.isRequired,
      variant: PropTypes.string
    }),
    items: PropTypes.arrayOf(PropTypes.string),
    isCodePen: PropTypes.bool,
    details: PropTypes.arrayOf(PropTypes.string),
    year: PropTypes.string,
    id: PropTypes.number,
    closePage: PropTypes.func,
    desktopUI: PropTypes.bool
  }

  static defaultProps = {
    mediaType: 'image',
    isCodePen: false,
    color: 'rebeccapurple'
  }

  constructor (props) {
    super(props)

    if (this.props.media.src) {
      this.state = {
        videoLoaded: false,
        videoAttempts: 0,
        videoFailed: false
      }
    }
  }

  componentDidMount () {
    document.title = this.props.title

    if (this.props.media.src) {
      const timer = setInterval(() => {
        this.handleVideo(timer)
      }, 1000)
      this.setState({timer: timer})
    }
  }

  componentWillUnmount () {
    if (this.props.media.src) {
      clearInterval(this.state.timer)
    }
  }

  get headingID () {
    return `ProjectsHeading${this.props.id}`
  }

  renderDetails () {
    const details = this.props.details
    return details.map(function (detail, index) {
      return (
        <div
          key={index}
          dangerouslySetInnerHTML={{__html: marked(detail)}}
          className="PageDetail"
        />
      )
    })
  }

  renderList () {
    return (
      <Checklist items={this.props.items} />
    )
  }

  renderMedia () {
    if (this.props.media.src) {
      return (
        <div className="PageVideoContainer">
          <video
            id={`video${this.props.id}`}
            loop
            muted
            autoPlay
            poster={this.props.media.img}
            className={(this.state.videoLoaded) ? 'PageVideo PageVideo--loaded' : 'PageVideo'}
          >
            <source src={this.props.media.src} type="video/mp4" />
          </video>
          {this.renderVideoOverlay()}
        </div>
      )
    } else {
      return (
        <Image src={this.props.media.img} alt={this.props.media.alt} />
      )
    }
  }

  handleImage () {

  }

  handleVideo (timer) {
    const video = document.getElementById(`video${this.props.id}`)

    // If the video is in the DOM, and ready to play...
    if (video && video.readyState > 3) {
      this.setState({
        videoLoaded: true
      })
      clearInterval(timer)
    // If the video is in the DOM but not loaded yet...
    } else if (video && this.state.videoAttempts < 15) {
      this.setState({
        videoAttempts: this.state.videoAttempts + 1
      })
    // If the video is either not there or taking over 10 seconds...
    } else {
      clearInterval(timer)
      this.setState({
        videoFailed: true
      })
    }
  }

  renderVideoOverlay () {
    if (!this.state.videoLoaded || this.state.videoFailed) {
      return (
        <span className="PageVideoOverlay">
          <Spinner
            message={this.renderOverlayMessage()}
            color="light"
          />
        </span>
      )
    } else {
      return null
    }
  }

  renderOverlayMessage () {
    if (!this.state.videoLoaded && !this.state.videoFailed) {
      return (
        <span>Loading video&hellip;</span>
      )
    } else {
      return (
        <span>Hmmm. Looks like I screwed up.</span>
      )
    }
  }

  render () {
    document.documentElement.style.setProperty('--color-active', this.props.color)
    return (
      <div>
        <article className="Page">
          <span
            style={{background: gradient(this.props.color, 'radial')}}
            className="PageBackground">
          </span>
          <div className="PagePrimary">
            <ProjectsHeading
              id={this.headingID}
              text={this.props.heading}
              color={this.props.color}
              desktopUI={this.props.desktopUI}
            />
            <div className="PageBody">
              {(this.props.details) ? this.renderDetails() : null}
              {this.props.children}
            </div>
          </div>
          <div className="PageSecondary">
            <div className="PageSecondaryContent">
              <div className="PageSecondaryMedia">
                {this.renderMedia()}
              </div>
              <div className="PageSecondaryInfo">
                <div className="PageSecondaryInfoLayout">
                  <div className="PageSecondaryInfoYear">
                    {this.props.year}
                  </div>
                  <div className="PageSecondaryInfoMain">
                    <div className="PageSecondaryInfoList">
                      {(this.props.items) ? this.renderList() : null}
                    </div>
                    {(this.props.action)
                      ? <ProjectsActionLink
                        prompt={this.props.action.prompt}
                        src={this.props.action.src}
                        variant={this.props.action.variant}
                        desktopUI={this.props.desktopUI}
                      /> : null
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        {
          (this.props.closePage)
            ? <PageBackButton
              label="Back to projects navigation"
              onClick={this.props.closePage}
              id="closer"
            /> : null
        }
      </div>
    )
  }
}

export default Page
