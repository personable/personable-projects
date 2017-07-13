import React, { Component, PropTypes } from 'react'
import marked from 'marked'
import { gradient } from '../../util/gradient'
import Checklist from '../Checklist/Checklist'

import './Page.css'

class Page extends Component {
  static propTypes = {
    heading: PropTypes.node.isRequired,
    children: PropTypes.node,
    color: PropTypes.string.isRequired,
    media: PropTypes.shape({
      type: PropTypes.oneOf(['image', 'video']),
      src: PropTypes.string,
      img: PropTypes.string,
      alt: PropTypes.string
    }),
    items: PropTypes.arrayOf(PropTypes.string),
    details: PropTypes.arrayOf(PropTypes.string),
    year: PropTypes.string
  }

  static defaultProps = {
    mediaType: 'image'
  }

  renderDescription () {

  }

  renderList () {
    return (
      <Checklist items={this.props.items} />
    )
  }

  renderMedia () {
    if (this.props.media.type === 'video') {
      return (
        <video
          loop
          muted
          autoPlay
          poster={this.props.media.img}
          className="PageVideo"
        >
          <source src={this.props.media.src} type="video/mp4" />
        </video>
      )
    } else {
      return (
        <img src={this.props.media.img} alt={this.props.media.alt} />
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
            <h1 style={{background: gradient(this.props.color, 'linear')}}>
              {this.props.heading}
            </h1>
          </header>
          <div className="PageBody">
            <span dangerouslySetInnerHTML={{__html: marked(this.props.details[0])}} />
            {this.props.children}
          </div>
        </div>
        <div className="PageSecondary">
          <div className="PageVideoContainer">
            {this.renderMedia()}
          </div>
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
