import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import './index.css'

ReactDOM.render(
  <App
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
          img: 'https://www.watfordfc.com/sites/default/files/social-hero-deeney_0.jpg'
        },
        action: {
          src: 'http://clubworx.com',
          prompt: 'See what a piece of shit it turned into'
        },
        details: [
          'Vivamus suscipit tortor eget felis porttitor volutpat.',
          'Tortor eget felis porttitor volutpat.'
        ]
      },
      {
        name: 'Minimal METRO',
        color: '#2980fa',
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
          'A couple of years ago, Portland, Maine\'s METRO transit system implemented bus tracking and made the API public. At the time METRO launched their API, the only options for tracking my bus I could find were sending a text or tapping around on an interactive map that didn\’t work on phones.',
          'Texting in 10 degrees is no fun, so __I decided to see if I could build an app that would tell me when my bus is coming in the morning with a single tap__. The BusTime API didn\’t accept client-side requests, so I had to learn a bit of PHP to get the data on the page. Once I got the PHP done, I set about the more exciting work of branding the app. I landed on a look I was pleased with: minimal and clean, but also approachable and playful through the use of vibrant color backgrounds.',
          'Winter 2016/2017 went on, and I was getting excited about this little side project. __Maybe it could grow into something that would help my fellow Portlanders adopt public transit?__ I built out the CSS. I added functionality for the app to serve the right bus stop based on the time of day.',
          '__And then I learned about Transit App.__ My band was playing a benefit show for a cat shelter at Flask Lounge. It was snowing. We didn\'t expect much of a turnout, and I was surprised when a friend of mine walked in. I asked if he drove downtown in the snow. He said he took the bus, and pulled out his iPhone to show me the app he used to catch the bus. Transit provided the same real-time bus information my app did, but with slick map/GPS functionality. It was nicely designed and completely free. I was so mad I couldn\'t form words for a couple of minutes.',
          'Lesson learned. __Always do market research before you build a product.__ I downloaded Transit from the App Store and moved on. Soon it was warm enough to bike to work again, and I forgot about the whole until the following winter, when I went back to the bus stop. Once I started using Transit regularly I couldn\'t escape the feeling I was drinking from the firehose: For a simple weekday commute, it was presenting *too much* information. I didn\'t need to know when the ferry was leaving to Peaks Island. I didn\'t want to see buses that were scheduled but not actually coming. I thought wistfully of Minimal METRO...',
          '__So I finished it.__ It\'s never going to be as full-featured as Transit (which I still have on my phone). But if you\'re looking for uncluttered, one-click access to your daily bus commute in Portland, Maine, you could do a whole lot worse.'
        ]
      },
      {
        name: 'Twitcha: The Twitta Switcha',
        color: '#65bdcb',
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
          'Twitcha is still pretty awesome.',
          'Best thing I ever did!'
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
          don\'t have :focus states or accommodate keyboard-only navigation. Many are also unusable for users of screenreaders.`,
          `I only know this because when I [added a checkbox toggle](https://codepen.io/personable/pen/stpwD)
          built with accessibility in mind, it went small-time CSS-nerd-viral and got hundreds of likes!`,
          `However, as time went by, **I felt less than impressed with the overall design, and the
          screenreader experience wasn\'t as great as it could have been**. So I went back to the
          drawing board and [emerged with a toggle](https://codepen.io/personable/pen/ZGKjwe) that\'s
          nicer-looking _and_ more accessible.
          At the time of this writing, it has a grand total of **11 likes**. Sigh. The zeitgeist has obviously
          passed checkbox toggles by...`
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
          'CodePen is great for vetting long-shot ideas. Most of the time, these vision quests are quietly deleted before anyone can stumble upon the embarrassing wreckage of what, in my head, was going to be amazing. Once in a while, though, things work out. Spin Cycle is my favorite CodePen by a long shot.',
          'I wonder what it looks like ?!'
        ]
      },
      {
        name: 'Instructure UI library',
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
          'This only has an image.',
          'I wonder what it looks like ?!'
        ]
      }
    ]}
  />,
  document.getElementById('root')
)
