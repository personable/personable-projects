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
          alt: 'A picture blah blah blah',
          src: 'https://www.w3schools.com/html/mov_bbb.mp4?fart=0',
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
        color: '#616EEF',
        year: '2013',
        items: ['Design', 'Front-end development'],
        isCodePen: true,
        media: {
          alt: 'A picture blah blah blah',
          img: '/img/poster-twitcha.png'
        },
        action: {
          src: 'http://www.google.com',
          prompt: 'Look for something!'
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
