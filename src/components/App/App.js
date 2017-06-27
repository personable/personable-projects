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

  render () {
    const ProjectPage = () => (
      <Projects projectData={this.props.projectData} />
    )
    const AboutPage = () => (
      <Page
        heading="Hello and welcome!"
        color="tomato"
        media="http://www.airfields-freeman.com/TX/GreaterSW_TX_field_02.jpg"
        mediaAlt="A picture of me"
        mediaType="video"
      />
    )
    return (
      <Router>
        <div className="App">
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
