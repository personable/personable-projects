import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
        color="#EA4848"
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
          `__But these days I focus on CSS and javascript as a UI Developer at [Instructure](http://www.instructure.com), helping bridge the gap between the design and engineering teams.__ I think what I do is also called a [front-end designer](http://bradfrost.com/blog/post/frontend-design) or [design technologist](https://medium.com/interactive-mind/the-rise-of-the-design-technologist-e9516aa821a0). Whatever it is, the combination of code and creativity fits me perfectly, and I love it!`,
          `__I began my career as a visual designer.__ However, once I discovered CSS (I think I managed to change a background color), it was a done deal: I was hooked, obsessed. Futzing around with Photoshop layers to create a static mockup suddenly paled in comparison to wiring up a living, breathing design right in the browser.`,
          `I set about gobbling up as much CSS knowledge as I could, working through the frustrations of layout and positioning, and relentlessly chasing down obscure hacks for Internet Explorer. __I've been writing CSS professionally for almost 10 years now__, and it's still my favorite thing. Over the past few years, however, I've made a lot of room in my heart for javascript &mdash; particularly React, which currently feels as exciting and addictive as CSS did when I was first picking it up.`,
          `__Web accessibility is another area I've grown into professionally.__ I used to think I was a hero for remembering to put \`alt\` attributes on images and \`:focus\` states on buttons. When I arrived at Instructure, it was a shock to discover that everything I shipped now had to be usable by keyboard-only navigation and three different screen readers. I've been lucky to be able to level up under the tutelage of some of the most knowledgeable and patient developers and QA engineers in the business. I still find myself Googling ARIA attributes on a regular basis, but I've come a long way since my days of willful ignorance about accessibility. While we’re on the subject, __this site should be navigable by keyboard or screenreader__: Please let me know if you find that’s not true.`,
          `Let's see, what else? __I live in Portland, Maine, with my family.__ I'm a proud dad and sheepish [dad rocker](http://firstinmaths.bandcamp.com). I eat a lot of cereal. I've had this domain name for almost 10 years now. I chose *personable* because it's a word that's followed me from performance review to performance review since I joined the working world: __I pride myself on being easy to work with, receptive to feedback, and positive and reasonable when obstacles come up.__ So even though my path has led away from "design" since I began my career and registered this domain, I'm trying hard to make sure the "personable" part remains true.`
        ]}
      />
    )

    // First, hide content from Edge and other old browsers
    const browserSupportsCSSVars = window.CSS && window.CSS.supports
    const browserIsEdge = navigator.userAgent.indexOf('Edge') !== -1

    if (browserSupportsCSSVars && !browserIsEdge) {
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
    } else {
      return (
        <Billboard headline="Dear Internet Explorer & Edge">
          <p>I spend a <strong>lot</strong> of time at my job working
          around your various limitations, and I wanted my personal site to be a fun escape
          from all that.</p>
          <p>Keep up the good work, though, and once you're up to speed, it's on!</p>
        </Billboard>
      )
    }
  }
}

export default App
