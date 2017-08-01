import React, { Component, PropTypes } from 'react'
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
