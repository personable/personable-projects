import React, { Component, PropTypes } from 'react'
import marked from 'marked'
import { gradient } from '../../util/gradient'
import Checklist from '../Checklist/Checklist'
import Spinner from '../Spinner/Spinner'

import './Page.css'

class Page extends Component {
  static propTypes = {
    heading: PropTypes.node.isRequired,
    children: PropTypes.node,
    color: PropTypes.string.isRequired,
    media: PropTypes.shape({
      src: PropTypes.string,
      img: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    }),
    items: PropTypes.arrayOf(PropTypes.string),
    details: PropTypes.arrayOf(PropTypes.string),
    year: PropTypes.string,
    projectID: PropTypes.number
  }

  static defaultProps = {
    mediaType: 'image'
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
    document.documentElement.style.setProperty(
      '--color-active', this.props.color
    )

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
            id={`video${this.props.projectID}`}
            loop
            muted
            autoPlay
            poster={this.props.media.img}
            className="PageVideo"
          >
            <source src={this.props.media.src} type="video/mp4" />
          </video>
          {this.renderVideoOverlay()}
        </div>
      )
    } else {
      return (
        <img src={this.props.media.img} alt={this.props.media.alt} />
      )
    }
  }

  handleVideo (timer) {
    const video = document.getElementById(`video${this.props.projectID}`)

    // If the video is in the DOM, and ready to play...
    if (video && video.readyState > 3) {
      this.setState({
        videoLoaded: true
      })
      clearInterval(timer)
    // If the video is in the DOM but not loaded yet...
    } else if (video && this.state.videoAttempts < 11) {
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
        <span>Loading video &hellip;</span>
      )
    } else {
      return (
        <span>
          Hmmm. Looks like I screwed up. <span className="PageEmoji">😰</span>
        </span>
      )
    }
  }

  render () {
    return (
      <article
        className="Page"
        style={{background: gradient(this.props.color, 'radial')}}
      >
        <div className="PagePrimary">
          <header className="PageHeader">
            <h1 style={{background: gradient(this.props.color, 'linear')}}>
              {this.props.heading}
            </h1>
          </header>
          <div className="PageBody">
            {(this.props.media.src && !this.state.videoLoaded) ? <h1>NO LOADRRRR</h1> : null}
            {(this.props.details) ? this.renderDetails() : null}
            {this.props.children}
          </div>
        </div>
        <div className="PageSecondary">
          {this.renderMedia()}
          <div className="PageSecondaryInfo">
            {this.props.year}
            {(this.props.items) ? this.renderList() : null}
          </div>
        </div>
      </article>
    )
  }
}

export default Page
