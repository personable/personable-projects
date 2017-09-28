import React, { Component, PropTypes } from 'react'
import { gradient } from '../../util/gradient'
import './Background.css'

class Background extends Component {
  static propTypes = {
    color: PropTypes.string,
    desktopUI: PropTypes.bool
  }

  render () {
    return (
      <span
        className={(this.props.desktopUI) ? 'Background Background--desktopUI' : 'Background'}
        style={{background: gradient(this.props.color, 'radial')}}
        aria-hidden="true"
      ></span>
    )
  }
}

export default Background
