import React, { Children, Component, PropTypes } from 'react'
import Icon from '../Icon/Icon'
import './Button.css'

class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    variant: PropTypes.oneOf(['light', 'dark'])
  }

  static defaultProps = {
    variant: 'light',
    type: 'button'
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

  renderChildren () {
    return Children.map(this.props.children, (child) => {
      if (child.type !== Icon) {
        return <span className="ButtonText">{child}</span>
      } else {
        return child
      }
    })
  }

  render () {
    const {
      id,
      type,
      variant
    } = this.props

    return (
      <button
        type={type}
        className={`Button Button--${variant}`}
        onClick={this.handleClick}
        id={id}
      >
        {this.renderChildren()}
      </button>
    )
  }
}

export default Button
