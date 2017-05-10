import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Projects from '../Projects/Projects'
import AppHeader from '../AppHeader/AppHeader'
import Page from '../Page/Page'
import Icon from '../Icon/Icon'
// import { gradient } from './util/gradient'
import './App.css'

class App extends Component {
  static propTypes = {
    projectData: PropTypes.array.isRequired
  }

  render () {
    const ProjectPage = () => (
      <Projects projectData={this.props.projectData} />
    )
    const AboutPage = () => (
      <Page heading="About" color="tomato">Hi there, About!</Page>
    )
    return (
      <Router>
        <div className="App">
          <AppHeader />
          <Icon label="My Codepen account" name="CodePen" />
          <Icon label="My Github account" name="GitHub" />
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
