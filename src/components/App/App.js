import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Projects from '../Projects/Projects'
import AppFooter from '../AppFooter/AppFooter'
import AppHeader from '../AppHeader/AppHeader'
import Billboard from '../Billboard/Billboard'
import Page from '../Page/Page'
import './App.css'

class App extends Component {
  static propTypes = {
    projectData: PropTypes.array.isRequired
  }

  renderBackground () {
    const colors = [
      '#fc345c',
      '#FE523F',
      'tomato',
      '#9C28DA',
      '#19CF4D',
      '#5856E4',
      '#F92536',
      '#384FFC',
      '#488DF5',
      '#E54D0C',
      '#5748FE',
      '#FF3431',
      '#EA4848',
      '#05D4A0',
      '#610FF8'
    ]
    const len = colors.length
    const activeColor = Math.floor(Math.random() * len) + 1
    return colors[activeColor - 1]
  }

  render () {
    const PageNotFound = () => (
      <Billboard headline="Page not found" variant="badNews">
        <p>Sorry! I only made two pages for this site, and I'm afraid this isn't one of them.</p>
      </Billboard>
    )

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
        color={this.renderBackground()}
        media={{
          src: 'https://www.w3schools.com/html/mov_bbb.mp4?fart=0',
          img: 'http://www.airfields-freeman.com/TX/GreaterSW_TX_field_02.jpg',
          alt: 'A picture of me',
          type: 'video'
        }}
        action={{
          variant: 'Mail',
          src: 'mailto:\u0063\u0068\u0072\u0069\u0073\u0040\u0070\u0065\u0072\u0073\u006f\u006e\u0061\u0062\u006c\u0065\u0064\u0065\u0073\u0069\u0067\u006e\u002e\u0063\u006f\u006d',
          prompt: '\u0063\u0068\u0072\u0069\u0073\u0040\u0070\u0065\u0072\u0073\u006f\u006e\u0061\u0062\u006c\u0065\u0064\u0065\u0073\u0069\u0067\u006e\u002e\u0063\u006f\u006d'
        }}
        items={[
          'Expert __CSS developer__ with a pixel-perfect eye',
          'Experience building user interfaces in __React__, __Angular__, __Backbone__, and __Rails__',
          '__Web accessibility__ enthusiast',
          'Meyers-Briggs: __INFP__',
          'Hogwarts: __Hufflepuff__'
        ]}
        year="411"
        id={8171975}
        details={[
          `But these days I spend my time writing CSS and presentational JavaScript
          at [Instructure](http://www.instructure.com), working on a UI development team
          that bridges product and engineering.`,
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
            <Switch>
              <Route exact path="/" component={ProjectPage} />
              <Route path="/about" component={AboutPage} />
              <Route component={PageNotFound} />
            </Switch>
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
