import React, { Component, PropTypes } from 'react'
import './ProjectsNavButton.css'

class ProjectsNavButton extends Component {
  static propTypes = {
    label: PropTypes.node.isRequired,
    color: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    desktopUI: PropTypes.bool
  }

  static defaultProps = {
    color: 'blue',
    desktopUI: false
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

  renderClasses () {
    if (this.props.active) {
      if (this.props.desktopUI) {
        return 'ProjectsNavButton ProjectsNavButton--desktopUI ProjectsNavButton--active'
      } else {
        return 'ProjectsNavButton ProjectsNavButton--active'
      }
    } else {
      if (this.props.desktopUI) {
        return 'ProjectsNavButton ProjectsNavButton--desktopUI'
      } else {
        return 'ProjectsNavButton'
      }
    }
  }

  render () {
    const {
      label,
      color,
      id
    } = this.props

    const background = {
      background: color
    }

    return (
      <button
        type="button"
        className={this.renderClasses()}
        onClick={this.handleClick}
        id={id}
      >
        <span
          aria-hidden="true"
          className="ProjectsNavButtonFlag"
          style={background}
        ></span>
        {label}
      </button>
    )
  }
}

export default ProjectsNavButton
