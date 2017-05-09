import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Projects from '../Projects/Projects'
import AppHeader from '../AppHeader/AppHeader'
import Page from '../Page/Page'
// import { gradient } from './util/gradient'
import './App.css'

class App extends Component {
  static propTypes = {
    projectData: PropTypes.array.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      activeColor: '#d71f85'
    }
    this.changeColor = this.changeColor.bind(this)
    this.updateColor()
  }

  componentDidUpdate () {
    this.updateColor()
  }

  changeColor () {
    this.setState({
      activeColor: '#69be28'
    })
    // console.log(this.state.activeColor)
  }

  updateColor () {
    document.documentElement.style.setProperty('--color-active', this.state.activeColor)
  }

  render () {
    // document.documentElement.style.setProperty('--color-active', this.state.activeColor)

    const ProjectPage = () => (
      <div>
        <h2>Projects</h2>
        <Projects projectData={this.props.projectData} />
      </div>
    )
    const AboutPage = () => (
      <Page heading="About" color={this.state.activeColor}>Hi there, About!</Page>
    )
    // const headerStyles = {
    //   background: gradient(this.props.color)
    // }
    return (
      <Router>
        <div className="App">
          <button type="button" onClick={this.changeColor}>Change</button>
          <AppHeader />
          <main className="AppMain">
            <Route exact path="/" component={ProjectPage} />
            <Route path="/about" component={AboutPage} />
          </main>
          <footer className="AppFooter">
            &copy;{new Date().getFullYear()} <a href="#">Personable Design and Dev</a>
          </footer>
        </div>
      </Router>
    )
  }
}

export default App
