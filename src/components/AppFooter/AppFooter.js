import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AppFooter.css'

class AppFooter extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    return (
      <footer className="AppFooter" role="contentinfo">
        {this.props.children}
      </footer>
    )
  }
}

export default AppFooter
