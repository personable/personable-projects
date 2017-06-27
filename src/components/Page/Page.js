import React, { Component, PropTypes } from 'react'
import { gradient } from '../../util/gradient'

import './Page.css'

class Page extends Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    bodyCopy: PropTypes.node,
    children: PropTypes.node,
    color: PropTypes.string.isRequired,
    media: PropTypes.node,
    mediaType: PropTypes.oneOf(['image', 'video']),
    mediaAlt: PropTypes.string
  }

  static defaultProps = {
    mediaType: 'image'
  }

  renderMedia () {
    if (this.props.mediaType === 'video') {
      return (
        <div className="PageVideoContainer">
          <video
            loop
            muted
            autoPlay
            poster="http://ui.specbee.com/sample/videoframe.jpg"
            className="PageVideo"
          >
            <source src="http://ui.specbee.com/sample/bird.mp4" type="video/mp4" />
          </video>
        </div>
      )
    } else {
      return (
        <img src={this.props.media} alt={this.props.mediaAlt} />
      )
    }
  }

  render () {
    document.documentElement.style.setProperty('--color-active', this.props.color)

    return (
      <article
        className="Page"
        style={{background: gradient(this.props.color, 'radial')}}
      >
        <div className="PagePrimary">
          <header className="PageHeader">
            <h1 style={{background: gradient(this.props.color, 'linear')}}>{this.props.heading}</h1>
          </header>
        </div>
        <div className="PageSecondary">
          {this.renderMedia()}
        </div>
      </article>
    )
  }
}

export default Page
