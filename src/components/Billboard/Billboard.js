import React, { Component, PropTypes } from 'react'
import Background from '../Background/Background'
import Icon from '../Icon/Icon'
import './Billboard.css'

class Billboard extends Component {
  static propTypes = {
    headline: PropTypes.node.isRequired,
    children: PropTypes.node,
    icon: PropTypes.string,
    variant: PropTypes.oneOf(['info', 'badNews', 'goodNews'])
  }

  static defaultProps = {
    variant: 'info'
  }

  translateColor () {
    switch (this.props.variant) {
      case 'badNews':
        return 'bad-news'
      case 'goodNews':
        return 'good-news'
      default:
        return 'info'
    }
  }

  render () {
    const color = window.getComputedStyle(document.body).getPropertyValue(`--color-${this.translateColor()}`)
    document.documentElement.style.setProperty('--color-active', color)

    return (
      <section className={`Billboard Billboard--${this.props.variant}`}>
        <Background color={color} />
        <header className="BillboardHeader">
          <Icon size="huge" color="light" name={this.props.icon} />
          <h1 className="BillboardHeadline">{this.props.headline}</h1>
        </header>
        {this.props.children}
      </section>
    )
  }
}

export default Billboard
