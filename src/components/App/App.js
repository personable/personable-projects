import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "../Projects/Projects";
import AppHeader from "../AppHeader/AppHeader";
import Billboard from "../Billboard/Billboard";
import Page from "../Page/Page";
import "./App.css";

class App extends Component {
  _breakpointTablet = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--breakpointTablet");
  _breakpointDesktop = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--breakpointDesktop");

  static propTypes = {
    projectData: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      screens: {
        tablet: false,
        desktop: false,
      },
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const tablet = window.matchMedia(`(min-width: ${this._breakpointTablet})`);
    const desktop = window.matchMedia(
      `(min-width: ${this._breakpointDesktop})`
    );

    const screens = {
      tablet: tablet.matches,
      desktop: desktop.matches,
    };

    if (
      this.state.screens.desktop !== screens.desktop ||
      this.state.screens.tablet !== screens.tablet
    ) {
      this.setState({
        screens,
      });
    }
  };

  render() {
    const PageNotFound = () => (
      <Billboard
        headline="Page not found"
        variant="badNews"
        screens={this.state.screens}
      >
        <p>
          Sorry! I only made three pages for this site, and I'm afraid this
          isn't one of them.
        </p>
      </Billboard>
    );

    const ProjectPage = () => (
      <Projects
        projectData={this.props.projectData}
        desktopUI={this.state.screens.desktop}
        screens={this.state.screens}
      />
    );

    /* eslint-disable max-len */
    const AboutPage = () => (
      <Page
        heading={
          <span>
            <span className="sr">About page: </span>
            <span>Chris Hart: Up close and personable</span>
          </span>
        }
        title="Personable Design & Development: Christopher Hart, UI developer in Portland, Maine"
        color="#EA4848"
        backgroundColor="#ed6666"
        media={{
          img: "/img/me-2020.jpg",
          alt: "A picture of me",
        }}
        action={{
          variant: "Mail",
          src:
            "mailto:\u0063\u0068\u0072\u0069\u0073\u0040\u0070\u0065\u0072\u0073\u006f\u006e\u0061\u0062\u006c\u0065\u0064\u0065\u0073\u0069\u0067\u006e\u002e\u0063\u006f\u006d",
          prompt:
            "\u0063\u0068\u0072\u0069\u0073\u0040\u0070\u0065\u0072\u0073\u006f\u006e\u0061\u0062\u006c\u0065\u0064\u0065\u0073\u0069\u0067\u006e\u002e\u0063\u006f\u006d",
        }}
        items={[
          "Expert __CSS developer__ and __visual designer__",
          "Solid javascript skills, especially __React__",
          "Experience building out user interfaces in __React__, __Angular__, __Backbone__, and __Rails__",
          "Skilled at __Figma__, __Illustrator__, and __Photoshop__",
          "Meyers-Briggs: __INFP__",
          "Hogwarts: __Hufflepuff__",
        ]}
        year="411"
        id={8171975}
        details={[
          `Hello! I'm a creative, detail-oriented, and yes, personable web professional with a deep skill set.`,
          `__I'm a seasoned designer who's ready to design again.__ I've been a successful visual designer in ecommerce, digital agency, and corporate in-house environments. In each setting, I've established myself as a producer of quality design that achieves business goals and delights users. I'm an expert in Photoshop and Illustrator, with recent experience contributing to a [Figma-based design system](https://instructure.design). In addition, my front-end skills give me the option of prototyping right in the browser.`,
          `__I'm also a UI developer.__ Or [front-end designer](https://bradfrost.com/blog/post/frontend-design/), [design technologist](https://medium.com/interactive-mind/the-rise-of-the-design-technologist-e9516aa821a0), or whatever else you want to call it. I love to code as much as I love to design. The CSS and React components I've contributed to [Instructure's](https://www.instructure.com/) design system over the past five years are used every day by millions of learners who log in to [Canvas LMS](https://www.instructure.com/canvas/). I code with a designer's eye for the kind of detail and polish that takes a user interface from good to great.`,
          `__I can write.__ Who said getting an English degree would be a waste of time? Well, a lot of people. But they were wrong! I'm a versatile writer and a good judge of tone. Documentation, blog posts and newsletters, UX microcopy, snappy headlines &#151; wherever I go, I usually end up being the one who steps up to write or edit it.`,
          `__I'm nice to work with.__ Heck, I'm so nice I have this domain name. I pride myself on being an enthusiastic, empathetic, and collaborative colleague. I make an effort to be receptive to feedback, and positive and reasonable when obstacles come up.`,
          `__Let's see. What else?__ I live in Portland, Maine, with my family. I'm a proud dad and a less proud musician. I eat a lot of cereal for a grown-up. *Finally, I'm looking for a new job, and I'm open to remote work.* Contact me via [email](mailto:\u0063\u0068\u0072\u0069\u0073\u0040\u0070\u0065\u0072\u0073\u006f\u006e\u0061\u0062\u006c\u0065\u0064\u0065\u0073\u0069\u0067\u006e\u002e\u0063\u006f\u006d) or [LinkedIn](https://www.linkedin.com/in/christopher-hart-8b182317b/) if you want to grab a no-pressure virtual coffee together.`,
        ]}
        screens={this.state.screens}
      />
    );
    /* eslint-enable max-len */

    // First, hide content from old browsers
    const browserSupportsCSSVars = window.CSS && window.CSS.supports;
    // const browserIsEdge = navigator.userAgent.indexOf('Edge') !== -1

    if (browserSupportsCSSVars) {
      return (
        <Router>
          <div
            className={classnames({
              App: true,
              "App--desktopUI": this.state.screens.desktop,
            })}
          >
            <AppHeader screens={this.state.screens} />
            <main className="AppMain">
              <Switch>
                {/* eslint-disable react/jsx-no-bind */}
                <Route exact path="/" component={AboutPage} />
                <Route path="/projects" component={ProjectPage} />
                <Route component={PageNotFound} />
                {/* eslint-enable react/jsx-no-bind */}
              </Switch>
            </main>
          </div>
        </Router>
      );
    } else {
      return (
        <Billboard
          headline="Dear Internet Explorer"
          screens={this.state.screens}
        >
          <p>
            I spend a <strong>lot</strong> of time at my job working around your
            various limitations, and I wanted my personal site to be a fun
            escape from all that.
          </p>
          <p>Rust in peace, my friend. love, Chris</p>
        </Billboard>
      );
    }
  }
}

export default App;
