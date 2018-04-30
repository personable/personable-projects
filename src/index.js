import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import './index.css'

ReactDOM.render(
  <App
    resumeData={[
      {
        employer: 'Instructure',
        employerDetail: 'Acquired 12 Spokes in 2014',
        title: 'Senior UX Developer',
        term: '2014 - present',
        logo: {
          src: '/img/logo-instructure.png',
          type: 'rect'
        },
        duties: [
          `Write javascript and CSS for new components in Instructure's React UI library.`,
          `Add features to — and fix bugs in — existing components.`,
          `Work with product design to identify requirements for new components`,
          `Mediate conflicts between design and engineering related to UI implementation.`,
          `Help maintain legacy Rails/Sass codebase.`,
          `Serve as go-to CSS resource/Internet Explorer whisperer.`
        ]
      },
      {
        employer: '12 Spokes',
        title: 'Front-end designer',
        term: '2011 - 2014',
        logo: {
          src: '/img/logo-12spokes.png',
          type: 'square'
        },
        duties: [
          `Served as designer and CSS developer for web applications built on one
          or more of the following technologies: Rails, Backbone, Angular and Ember.`,
          'Created javascript prototypes and paired with developers to implement them in production-ready code.',
          'Participated in code reviews, project estimations, and managed client budget and expectations as part of project team.'
        ]
      },
      {
        employer: 'Cuddledown',
        title: 'Web designer',
        term: '2009 - 2011',
        logo: {
          src: '/img/logo-cuddledown.gif',
          type: 'rect'
        },
        duties: [
          'Created and coded page displays for cuddledown.com on the MarketLive eCommerce Platform.',
          'Designed and coded weekly HTML emails/newsletters.',
          'Created custom Wordpress theme for company blog.'
        ]
      },
      {
        employer: 'British Telecom',
        title: 'Graphic/web designer',
        term: '2005 - 2009',
        logo: {
          src: '/img/logo-bt.png',
          type: 'square'
        },
        duties: [
          'Created user guides, posters, web graphics, Flash demos and banners, HTML emails, and site page designs.',
          'Collaborated with developers in both marketing and IT to provide interface design, CSS, and copy for large-scale web projects.'
        ]
      }
    ]}
    projectData={[
      {
        name: 'ClubWorx Gym Management',
        color: '#f17310',
        year: '2014',
        items: ['Design', 'Front-end development'],
        isCodePen: false,
        media: {
          alt: 'Selected examples from the Clubworx design comp and front-end implementation',
          src: '/video/screencast-clubworx.mp4?dl=0',
          img: '/img/poster-clubworx.png'
        },
        action: {
          src: 'http://clubworx.com',
          prompt: 'clubworx.com'
        },
        details: [
          `Clubworx is a lightweight gym management app aimed at small fitness, crossfit,
          and martial arts studios that I worked on during my time at 12 Spokes.`,
          `I was given a logo and tasked with designing the app's online brand, as well as
          building out a CSS style guide that would serve as the foundation of the user interface.
          The client was a pleasure to work with, and we quickly settled on an uncluttered,
          modern look, with plenty of white space and bold accent colors. To save billable hours
          for this MVP, I settled on using the Sass build of Bootstrap as the basis for the
          style guide, and added custom checkboxes, toggles, and radio buttons to make the many
          form-heavy views more attractive.`,
          `Shortly after I'd finished the styleguide and &#151; working in tandem
          with an Angular developer &#151; a couple of initial features, 12 Spokes was acquired,
          and I was off the project and on to new things at Instructure. I'm still proud of the
          design and style guide development work, and wish I could have seen the whole thing through.`
        ]
      },
      {
        name: 'Minimal METRO',
        color: '#3886f4',
        year: '2018',
        items: ['Design', 'Front-end development'],
        isCodePen: false,
        media: {
          alt: 'Minimal METRO home page',
          src: 'http://personabledesign.com/assets/video/projects-metro.mp4',
          img: '/img/poster-metro.png'
        },
        action: {
          src: 'http://metro.personabledesign.com',
          prompt: 'Minimal METRO'
        },
        details: [
          `A couple of years ago, Portland, Maine's METRO transit system implemented bus tracking and made the API public. At the time METRO launched their API, the only options for tracking my bus I could find were sending a text or tapping around on an interactive map that didn't work on phones.`,
          `Texting in 10 degrees is no fun, so __I decided to see if I could build an app that would tell me when my bus is coming in the morning with a single tap__. The BusTime API didn't accept client-side requests, so I had to learn a bit of PHP to get the data on the page. Once I got the PHP done, I set about the more exciting work of branding the app. I landed on a look I was pleased with: minimal and clean, but also approachable and playful through the use of vibrant color backgrounds.`,
          'Winter 2016/2017 went on, and I was getting excited about this little side project. Maybe it could grow into something that would help my fellow Portlanders adopt public transit? I built out the CSS. I added functionality for the app to serve the right bus stop based on the time of day.',
          '__And then I learned about Transit App.__ My band was playing a benefit show for a cat shelter at Flask Lounge. It was snowing. We didn\'t expect much of a turnout, and I was surprised when a friend of mine walked in. I asked if he drove downtown in the snow. He said he took the bus, and pulled out his iPhone to show me the app he used to catch the bus. Transit provided the same real-time bus information my app did, but with slick map/GPS functionality. It was nicely designed and completely free. I was so mad I couldn\'t form words for a couple of minutes.',
          'Lesson learned. __Always do market research before you build a product.__ I downloaded Transit from the App Store and moved on. Soon it was warm enough to bike to work again, and I forgot about the whole until the following winter, when I went back to the bus stop. Once I started using Transit regularly I couldn\'t escape the feeling I was drinking from the firehose: For a simple weekday commute, it was presenting *too much* information. I didn\'t need to know when the ferry was leaving to Peaks Island. I didn\'t want to see buses that were scheduled but not actually coming. I thought wistfully of Minimal METRO...',
          `So I finished it. It's never going to be as full-featured as Transit (which I still have on my phone). But if you're looking for uncluttered, one-click access to your daily bus commute in Portland, Maine, you could do a whole lot worse.`
        ]
      },
      {
        name: 'Twitcha: The Twitta Switcha',
        color: '#51b0c0',
        year: '2011',
        items: ['Design', 'Front-end development'],
        isCodePen: false,
        media: {
          alt: 'A picture blah blah blah',
          src: '/video/screencast-twitcha.mp4',
          img: '/img/poster-twitcha.png'
        },
        action: {
          src: 'http://twitcha.personabledesign.com',
          prompt: 'Try a Twitch for yourself!'
        },
        details: [
          'Twitcha is an app that searches for words or phrases on Twitter and replaces them with whatever snark you can dream up.',
          `It's pointless. It's immature. Sometimes I lie awake at night and fear it might be the best thing I'll ever make.`,
          `Well, ok, not really. But after the better part of a decade, Twitcha still holds up pretty well and makes me laugh whenever
          I remember it still exists. It was also my first responsive design project and foray into javascript (ok, let’s be honest, jQuery),
          which in turn helped me land my first real web development job &mdash; so it’ll always have a special place in my heart.`
        ]
      },
      {
        name: 'Accessible checkbox toggle',
        color: '#00ac19',
        year: '2013',
        items: ['Design', 'Front-end development'],
        isCodePen: true,
        media: {
          alt: 'Sreenshot of Accessible Checkbox Toggle CodePen',
          img: '/img/poster-toggles.png'
        },
        action: {
          src: 'https://codepen.io/personable/pen/ZGKjwe',
          prompt: 'Check out the CodePen!'
        },
        details: [
          `There are a ton of checkbox-as-toggle-switch examples on Codepen. However, most of them
          don't have :focus states or accommodate keyboard-only navigation. Many are also unusable for users of screenreaders.`,
          `I only know this because when I [added a checkbox toggle](https://codepen.io/personable/pen/stpwD)
          built with accessibility in mind, it went small-time CSS-nerd-viral and got hundreds of likes.`,
          `However, as time went by, I felt less than impressed with the overall design, and the
          screenreader experience wasn't as great as it could have been. So I went back to the
          drawing board and [emerged with a toggle](https://codepen.io/personable/pen/ZGKjwe) that's
          nicer-looking _and_ more accessible.
          At the time of this writing, it has a grand total of **11 likes**. Sigh. I guess the zeitgeist has
          passed checkbox toggles by!`
        ]
      },
      {
        name: 'SVG Spin Cycle',
        color: '#5f5ffe',
        year: '2016',
        items: ['Design', 'Front-end development'],
        isCodePen: true,
        media: {
          alt: 'A picture blah blah blah',
          img: '/img/poster-spin-cycle2.png'
        },
        action: {
          src: 'https://codepen.io/personable/pen/jPMXPv',
          prompt: 'Check out the CodePen'
        },
        details: [
          `CodePen is great for trying out random/long-shot ideas. Most of the time,
          I quietly delete these vision quests before anyone can stumble upon the
          embarrassing wreckage of what, in my head, was going to be amazing.
          Once in a while, though, things work out, and the Pen gets saved.`,
          `This Pen came about because I wanted to see if I could create a
          classic spinner by animating SVG paths with CSS. Not the most original
          idea, but it was fun to figure out. Once that was done, it occurred to me
          that it would be cool to be able to turn _any_ simple SVG into a spinner
          by applying a CSS class to it &#151; so you could do things like serve up a
          unique spinner for each section of an app by just updating the icon.`,
          `Then my occasional need to abstract everything to the point where only
          I can understand it kicked in, and a couple of pretty impenetrable Sass
          mixins later, I had a finished product. The end result looks pretty good &#151;
          although looking back at it now, all that Sass would have been a lot more
          digestible inside a component, with the animation parameters passed in
          as properties.`
        ]
      },
      {
        name: 'Instructure UI',
        color: '#008EE2',
        year: '2016',
        items: ['Front-end development'],
        media: {
          alt: 'A picture blah blah blah',
          src: 'https://www.w3schools.com/tags/movie.mp4',
          img: 'https://www.watfordfc.com/sites/default/files/social-hero-deeney_0.jpg'
        },
        action: {
          src: 'http://instructure.github.io/instructure-ui/',
          prompt: 'Instructure-UI'
        },
        details: [
          `Instructure UI is Instructure's open source React component library.
          It's primarily used to build user interfaces in [Canvas LMS](https://www.canvaslms.com) and other products.`,
          `Canvas has millions of users around the world, which means Instructure UI
          components need to account for factors like internationalized text and right-to-left
          language support. The educational institutions Instructure serves quite rightly have
          stringent accessibility requirements: All components need to work in the three most
          popular screen readers, meet WCAG color contrast requirements, and be usable by
          keyboard-only users. In short, I can’t overstate how much I’ve learned about web development by being part
          of the talented team that puts Instructure UI together.`,
          `My main contributions to Instructure UI have been design- and CSS-heavy components like
          [Progress](http://instructure.github.io/instructure-ui/#Progress),
          [Badge](http://instructure.github.io/instructure-ui/#Badge),
          [Rating](http://instructure.github.io/instructure-ui/#Rating),
          [Spinner](http://instructure.github.io/instructure-ui/#Spinner),
          [Flex](http://instructure.github.io/instructure-ui/#Flex), and
          [Checkbox](http://instructure.github.io/instructure-ui/#Checkbox).`
        ]
      }
    ]}
  />,
  document.getElementById('root')
)
