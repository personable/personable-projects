import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
          <Icon size="large" color={this.props.color} />
        </span>
        <span className="SpinnerMessage">{this.props.message}</span>
      </div>
    )
  }
}

export default Spinner
