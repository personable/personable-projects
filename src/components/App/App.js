import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Projects from '../Projects/Projects'
import AppFooter from '../AppFooter/AppFooter'
import AppHeader from '../AppHeader/AppHeader'
import Page from '../Page/Page'
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
        heading={<span>I designed something once &hellip;</span>}
        color="orangered"
        media={{
          src: 'http://ui.specbee.com/sample/bird.mp4',
          img: 'http://www.airfields-freeman.com/TX/GreaterSW_TX_field_02.jpg',
          alt: 'A picture of me',
          type: 'video'
        }}
        items={['CSS expert', 'Pixel-perfect eye', 'Hufflepuff']}
        year="Vital stats"
        details={[
          'This is the __first__ paragraph',
          'This is the second paragraph',
          'This is the third paragraph'
        ]}
      >
        <p><b>&hellip; but these days I spend my time writing CSS and presentational
        JavaScript at Instructure, working on a team that bridges product and
        engineering.</b></p>
        <p>On any given workday, you might find me bringing a design
        mockup to life in the browser, helping a project team get its CSS
        off to a good start, contributing to Instructure’s
        <a href="http://instructure.github.io/instructure-ui/">growing library</a> of
        accessible UI components, or simply figuring out why [blank] isn't working in IE.
        I think what I do is called UI developer, front-end designer, or design
        technologist these days? Whatever it is, the mixture of code and
        creativity fits me perfectly, and I love it.</p>
        <p>For the past six years I’ve worked inside Rails apps large and small,
        and have been tasked with building or updating user interfaces using Backbone,
        AngularJS, and most recently React. ♥ CSS ♥ is my one true work love, though.
        I particularly enjoy refactoring tangled and troublesome old codebases.</p>
        <p>Let's see, what else? I self-identify as a Hufflepuff and
        <a href="http://firstinmaths.bandcamp.com">play music</a> like
        every other annoying web guy out there.</p>
      </Page>
    )
    return (
      <Router>
        <div className="App">
          <AppHeader />
          <main className="AppMain">
            <Route exact path="/" component={ProjectPage} />
            <Route path="/about" component={AboutPage} />
          </main>
          <AppFooter>
            &copy;{new Date().getFullYear()} Personable Design &amp; Dev
          </AppFooter>
        </div>
      </Router>
    )
  }
}

export default App
