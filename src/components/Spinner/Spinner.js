import React, { Component, PropTypes } from 'react'
import Icon from '../Icon/Icon'
import './Spinner.css'

class Spinner extends Component {
  static propTypes = {
    message: PropTypes.node,
    color: PropTypes.oneOf(['dark', 'light', 'active'])
  }

  static defaultProps = {
    color: 'dark'
  }

  render () {
    return (
      <div className={`Spinner Spinner--${this.props.color}`}>
        <span className="SpinnerAnimation">
          <Icon size="large" color="light" />
        </span>
        <span className="SpinnerMessage">{this.props.message}</span>
      </div>
    )
  }
}

export default Spinner
