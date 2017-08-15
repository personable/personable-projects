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
        heading={
          <span>
            <span className="sr">About page: </span>
            <span>I designed something once&hellip;</span>
          </span>
        }
        title="Personable Design & Development: Christopher Hart, UI developer in Portland, Maine"
        color="rebeccapurple"
        media={{
          src: 'http://ui.specbee.com/sample/bird.mp4',
          img: 'http://www.airfields-freeman.com/TX/GreaterSW_TX_field_02.jpg',
          alt: 'A picture of me',
          type: 'video'
        }}
        items={['CSS expert', 'Pixel-perfect eye', 'Hufflepuff']}
        year="Vital stats"
        details={[
          `__... but these days I spend my time writing CSS and presentational JavaScript
          at [Instructure](http://www.instructure.com), working on a UI development team
          that bridges product and engineering.__`,
          `On any given workday, you might find me bringing a design mockup to life in
          the browser, helping a project team get its CSS off to a good start, contributing
          to Instructure's [growing library](http://instructure.github.io/instructure-ui)
          of accessible UI components, or simply figuring out why [blank] is broken in IE.
          I think what I do is called
          [UI developer](https://stackoverflow.com/questions/9700286/whats-the-difference-between-a-frontend-vs-ui-developer),
          [front-end designer](http://bradfrost.com/blog/post/frontend-design), or
          [design technologist](https://medium.com/interactive-mind/the-rise-of-the-design-technologist-e9516aa821a0)
          these days? Whatever it is, the combination of creativity and code fits me perfectly,
          and I love it!`,
          `Let's see -- what else? I live with my wife and daughter in Portland, Maine, self-identify
          as a Hufflepuff, and [play music](http://firstinmaths.bandcamp.com), just like every other
          annoying web guy.`
        ]}
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
          <AppFooter>
            &copy;{new Date().getFullYear()} Personable Design &amp; Dev
          </AppFooter>
        </div>
      </Router>
    )
  }
}

export default App
