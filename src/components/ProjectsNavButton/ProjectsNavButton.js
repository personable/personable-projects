import React, { Component, PropTypes } from 'react'
import './ProjectsNavButton.css'

class ProjectsNavButton extends Component {
  static propTypes = {
    label: PropTypes.node.isRequired,
    color: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    id: PropTypes.string
  }

  static defaultProps = {
    color: 'blue'
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
      color,
      active,
      id
    } = this.props

    return (
      <button
        type="button"
        style={{background: color}}
        className={(active)
          ? 'ProjectsNavButton ProjectsNavButton--active' : 'ProjectsNavButton'}
        onClick={this.handleClick}
        id={id}
      >
        {label}
      </button>
    )
  }
}

export default ProjectsNavButton
