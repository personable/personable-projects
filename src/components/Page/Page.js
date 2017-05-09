import React, { Component, PropTypes } from 'react'
import { gradient } from '../../util/gradient'

class Page extends Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    color: PropTypes.string.isRequired
  }

  render () {
    return (
      <article style={{background: gradient(this.props.color)}}>
        <h1>{this.props.heading}</h1>
        {this.props.children}
      </article>
    )
  }
}

export default Page
