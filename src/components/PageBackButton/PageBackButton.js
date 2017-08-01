import React, { Component, PropTypes } from 'react'
import './PageBackButton.css'

class PageBackButton extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    id: PropTypes.string
  }

  static defaultProps = {
  }

  handleClick = (e) => {
    const {
      disabled,
      onClick
    } = this.props

    if (disabled) {
      e.preventDefault()
      e.stopPropagation()
    } else if (typeof onClick === 'function') {
      onClick(e)
    }
  }

  render () {
    const {
      label,
      id
    } = this.props

    return (
      <button
        type="button"
        className="PageBackButton"
        onClick={this.handleClick}
        id={id}
      >
        {label}
      </button>
    )
  }
}

export default PageBackButton
