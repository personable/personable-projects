import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Spinner from '../Spinner/Spinner'
import './Image.css'

class Image extends Component {
  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
  }

  static defaultProps = {
    alt: ''
  }

  constructor (props) {
    super(props)
    this.state = {
      imageLoaded: false,
      error: false
    }
    this.handleLoaded = this.handleLoaded.bind(this)
    this.handleError = this.handleError.bind(this)
  }

  handleLoaded () {
    this.setState({
      imageLoaded: true
    })
  }

  handleError () {
    this.setState({
      error: true
    })
  }

  renderSpinnerMessage () {
    if (this.state.error) {
      return (
        <span>Dang. Looks like this image isn't going to load. Sorry I messed up :(</span>
      )
    } else {
      return (
        <span>Loading image&hellip;</span>
      )
    }
  }

  renderSpinner () {
    if (!this.state.imageLoaded) {
      return (
        <Spinner
          message={this.renderSpinnerMessage()}
          color="light"
        />
      )
    }
  }

  render () {
    return (
      <span className={(this.state.imageLoaded) ? 'Image Image--loaded' : 'Image'}>
        <img
          className="ImageSrc"
          src={this.props.src}
          alt={this.props.alt}
          onLoad={this.handleLoaded}
          onError={this.handleError}
        />
        {this.renderSpinner()}
      </span>
    )
  }
}

export default Image
