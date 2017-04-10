import React, { Component, PropTypes } from 'react'
import Color from 'tinycolor2'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  static propTypes = {
    color: PropTypes.string
  }

  render () {
    const color = Color(this.props.color).desaturate(10)
    const analogousColors = Color(color).analogous(7).map(function (t) {
      return t.toHexString()
    })
    const headerStyles = {
      background:
        `radial-gradient(circle at 35% 90%, ${analogousColors[1]}, transparent 50%),
        radial-gradient(circle at 43% 73%, ${analogousColors[2]}, transparent 60%),
        radial-gradient(circle at 48% 86%, ${analogousColors[3]}, transparent 100%),
        radial-gradient(circle at 73% 35%, ${analogousColors[4]}, transparent 100%),
        radial-gradient(circle at 10% 0%, ${color}, transparent 100%),
        radial-gradient(circle at 50% 50%, ${analogousColors[6]}, ${analogousColors[3]} 50%)`
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
