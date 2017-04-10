import React, { Component, PropTypes } from 'react'
import { gradient } from './util/gradient'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  static propTypes = {
    color: PropTypes.string
  }

  render () {
    const headerStyles = {
      background: gradient(this.props.color)
    }
    return (
      <div className="App">
        <div className="App-header" style={headerStyles}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
