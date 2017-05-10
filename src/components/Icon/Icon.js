import React, { Component, PropTypes } from 'react'
import './Icon.css'

class Icon extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.oneOf(['CodePen', 'GitHub']),
    size: PropTypes.oneOf(['small', 'medium', 'large'])
  }

  static defaultProps = {
    size: 'small',
    icon: 'CodePen'
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
      default:
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
    }
  }

  render () {
    return (
      <span className={`Icon Icon--${this.props.size}`}>
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
