import React, { Component, PropTypes } from 'react'
import './PageBackButton.css'

class PageBackButton extends Component {
  static propTypes = {
    text: PropTypes.node.isRequired,
    colors: PropTypes.array.isRequired,
    activeIndex: PropTypes.number.isRequired,
    screenreaderText: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    id: PropTypes.string
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

  checkColor (val) {
    const white = window.getComputedStyle(document.body).getPropertyValue('--color-clouds')

    if (val == null) {
      return white
    } else {
      return val
    }
  }

  render () {
    const {
      text,
      screenreaderText,
      id,
      colors,
      activeIndex
    } = this.props

    return (
      <button
        type="button"
        className="PageBackButton"
        onClick={this.handleClick}
        id={id}
      >
        <span className="PageBackButtonBurger" aria-hidden="true" role="presentation">
          <span
            className="PageBackButtonPatty"
            style={{
              backgroundColor: this.checkColor(colors[activeIndex - 1])
            }}
          >
          </span>
          <span
            className="PageBackButtonPatty"
            style={{backgroundColor: colors[activeIndex]}}
          >
          </span>
          <span
            className="PageBackButtonPatty"
            style={{
              backgroundColor: this.checkColor(colors[activeIndex + 1])
            }}
          >
          </span>
        </span>
        <span
          className="PageBackButtonText"
          aria-hidden={(screenreaderText) ? 'true' : 'false'}
          role={(screenreaderText) ? 'presentation' : ''}
        >
          {text}
        </span>
        <span className="sr">{screenreaderText}</span>
      </button>
    )
  }
}

export default PageBackButton
