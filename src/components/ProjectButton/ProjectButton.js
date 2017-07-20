import React, { Component, PropTypes } from 'react'
import './ProjectButton.css'

class ProjectButton extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
  }

  static defaultProps = {
    color: 'blue'
  }

  // constructor (props) {
  //   super(props)
  //
  //   this.handleClick = this.handleClick.bind(this)
  // }

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
      color,
      active
    } = this.props

    return (
      <button
        type="button"
        style={{background: color}}
        className={(active)
          ? 'ProjectButton ProjectButton--active' : 'ProjectButton'}
        onClick={this.handleClick}
      >
        {label}
      </button>
    )
  }
}

export default ProjectButton
