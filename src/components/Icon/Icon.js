import React, { Component, PropTypes } from 'react'
import './Icon.css'

class Icon extends Component {
  static propTypes = {
    label: PropTypes.string,
    name: PropTypes.oneOf(['CodePen', 'GitHub', 'X', 'Check', 'Mail', 'ExternalLink']),
    size: PropTypes.oneOf(['xSmall', 'small', 'medium', 'large', 'huge']),
    color: PropTypes.oneOf(['dark', 'light', 'active'])
  }

  static defaultProps = {
    size: 'small',
    color: 'dark'
  }

  get icon () {
    switch (this.props.name) {
      case 'CodePen':
        return (
          <path d="M22 8.5c0-0.2-0.1-0.5-0.4-0.6l-8.6-5.6C12.7 2.1 12.3 2 12 2s-0.7
            0.1-1 0.3L2.4 7.9C2.1 8.1 2 8.3 2 8.5h0v6.9h0c0 0.2 0.1 0.5 0.4 0.6l8.6
            5.6c0.3 0.2 0.6 0.3 1 0.3s0.7-0.1 1-0.3l8.6-5.6c0.3-0.2 0.4-0.4 0.4-0.6h0L22
            8.5 22 8.5zM19.4 8.5L15.7 11l-2.7-1.8c0 0-0.1 0-0.1 0V4.3L19.4 8.5zM20.2
            10.1v3.9l-3-1.9L20.2 10.1zM12 13.4C12 13.4 12 13.4 12 13.4 11.9 13.4 11.9
            13.4 12 13.4L9.9 12l2.1-1.4c0 0 0 0 0 0 0 0 0 0 0 0l2.1 1.4L12 13.4zM11.1
            4.3v4.9c0 0-0.1 0-0.1 0L8.3 11 4.6 8.5 11.1 4.3zM6.7 12l-3 1.9v-3.9L6.7
            12zM4.6 15.5L8.3 13l2.7 1.8c0 0 0.1 0 0.1 0v4.9L4.6 15.5zM12.8 19.7v-4.9c0
            0 0.1 0 0.1 0l2.7-1.8 3.7 2.4L12.8 19.7z" />
        )
      case 'GitHub':
        return (
          <path d="M12 2C6.5 2 2 6.6 2 12.3c0 4.5 2.9 8.4 6.8
            9.7.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6
            1 .1 1.5 1.1 1.5 1.1.9 1.6 2.3 1.1 2.9.9.1-.7.3-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5.1
            0-1.1.4-2 1-2.8 0-.3-.3-1.3.2-2.7 0 0 .8-.3 2.7 1.1.9-.3 1.8-.4 2.6-.4s1.7.1
            2.5.3c1.9-1.3 2.7-1.1 2.7-1.1.5 1.4.2 2.5.1 2.7.6.7 1 1.6 1 2.8 0 3.9-2.3
            4.8-4.6 5.1.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.4 6.8-5.2 6.8-9.7C22
            6.6 17.5 2 12 2z" />
        )
      case 'Check':
        return (
          <polygon points="18.4 4 9.1 13 5.6 9.6 2 13 5.6 16.5 5.6 16.5 9.1 20 22 7.5 " />
        )
      case 'X':
        return (
          <polygon points="20,7.5 16.5,4 12,8.5 7.5,4 4,7.5 8.5,12 4,16.5 7.5,20
            12,15.5 16.5,20 20,16.5 15.5,12 " />
        )
      case 'ExternalLink':
        return (
          <g>
            <polygon points="20.3 20.3 3.7 20.3 3.7 3.7 10.3 3.7 8.8 2 2 2 2 22 22 22 22 15.3 20.3 13.7" />
            <polygon points="22 2 12.1 2 15.8 5.8 9.2 12.4 11.6 14.8 18.2 8.2 22 11.9" />
          </g>
        )
      case 'Mail':
        return (
          <path d="M2 4v1 1 12 1 1h20v-1 -1V6 5 4H2zM18.6 6L12 11.8 5.4 6H18.6zM3.9 18V7.3l8.1 7.1 8.1-7.1V18H3.9z" />
        )
      default:
        return (
          <path d="M5.2 10.3C5.1 10.6 5.1 10.8 5 11c0.1 0.5 0.5 1.2 1.1 2 0.1-0.2
            0.3-0.4 0.5-0.7 0.4-0.5 0.8-1 1.1-1.3 0.2-0.4 0.3-0.7 0.3-1
            0-0.3-0.2-0.6-0.5-0.9C7.1 8.7 6.7 8.6 6.3 8.8S5.5 9.6 5.2 10.3zM18.8
            13.8c0.1-0.2 0.1-0.4 0.2-0.6 -0.2-0.6-0.6-1.3-1.2-2.1 -0.1 0.2-0.3 0.4-0.5 0.6
            -0.4 0.5-0.8 1-1 1.4 -0.2 0.4-0.3 0.7-0.3 1 0 0.3 0.2 0.6 0.5 0.9 0.4 0.4 0.8 0.5
            1.2 0.3C18.1 15.1 18.5 14.6 18.8 13.8zM17.6 18.3c-0.6 0.5-1.2 0.7-1.7 0.8 -0.6
            0.1-1.1 0.1-1.6 0 -0.5-0.1-1-0.4-1.4-0.7 -0.4-0.3-0.7-0.7-1-1.2 -0.2-0.5-0.4-1-0.4-1.7
            0-0.6 0.2-1.3 0.6-2.1 0.4-0.8 1-1.4 1-1.4 0.5-0.5 1.3-1.3 1.8-1.8 0.1-0.1 0.3-0.3
            0.4-0.4 0.5-0.5 0.4-1.2 0-1.7 -0.8-0.8-1.6-1.5-2.4-2.2 -0.5-0.4-0.5-1.1 0-1.4 0.5-0.4
            1-0.7 1.4-1 0.4-0.3 0.3-0.7-0.1-0.9 -0.6-0.3-1.1-0.5-1.6-0.7 -0.4-0.1-1-0.1-1.4 0C9.7
            2.5 7.8 3.8 6.4 5.5 6 6 5.9 6.2 6.1 6c0 0 0 0 0.2-0.2 0.6-0.5 1.1-0.7 1.7-0.8 0.6-0.1
            1.1-0.1 1.6 0 0.5 0.1 1 0.4 1.4 0.7 0.4 0.3 0.7 0.7 1 1.2 0.2 0.5 0.4 1 0.4 1.7s-0.2
            1.3-0.6 2.1c-0.4 0.8-1 1.4-1 1.4 -0.5 0.5-1.3 1.4-1.8 1.8 -0.2 0.2-0.3 0.3-0.5 0.5
            -0.5 0.4-0.4 1.2 0.1 1.7 0.8 0.8 1.6 1.5 2.4 2.2 0.5 0.4 0.5 1 0 1.4 -0.5 0.4-1 0.7-1.4
            0.9 -0.4 0.3-0.3 0.7 0.1 0.9 0.5 0.3 1 0.5 1.4 0.6 0.4 0.1 1 0.1 1.4 0 1.4-0.4 3.2-1.4
            4.6-3C17.6 18.5 17.8 18.1 17.6 18.3 17.7 18.2 17.7 18.2 17.6 18.3z" />
        )
    }
  }

  render () {
    return (
      <span className={`Icon Icon--${this.props.size} Icon--${this.props.color}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          role="img"
          focusable="false"
          aria-labelledby={`IconLabelFor${this.props.name}`}
          viewBox="0 0 24 24">
          <title id={`IconLabelFor${this.props.name}`}>
            {this.props.label}
          </title>
          <g role="presentation">
            {this.icon}
          </g>
        </svg>
      </span>
    )
  }
}

export default Icon
