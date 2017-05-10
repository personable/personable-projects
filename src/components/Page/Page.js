import React, { Component, PropTypes } from 'react'
import { gradient } from '../../util/gradient'

class Page extends Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    color: PropTypes.string.isRequired
  }

  render () {
    document.documentElement.style.setProperty('--color-active', this.props.color)

    return (
      <article style={{background: gradient(this.props.color, 'radial')}}>
        <h1 style={{background: gradient(this.props.color, 'linear')}}>{this.props.heading}</h1>
        {this.props.children}
      </article>
    )
  }
}

export default Page
