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
        color: '#69be28',
        year: '2013',
        items: ['Design', 'Front-end development lets see what happens when this gets a bit longer my friend'],
        isCodePen: true,
        media: {
          alt: 'A picture blah blah blah',
          img: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg'
        },
        action: {
          src: 'http://www.google.com',
          prompt: 'Look for something!'
        },
        details: [
          'This only has an image.',
          'I wonder what it looks like ?!'
        ]
      },
      {
        name: 'Some awesome CodePen',
        color: '#6C5070',
        year: '2016',
        items: ['Design', 'Front-end development'],
        isCodePen: true,
        media: {
          alt: 'A picture blah blah blah',
          img: 'https://cdn.pixabay.com/photo/2015/07/31/15/01/guitar-869217_1280.jpg'
        },
        action: {
          src: 'http://www.google.com',
          prompt: 'Check out the CodePen'
        },
        details: [
          'This only has an image.',
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
          src: 'https://www.w3schools.com/html/mov_bbb.mp4?fart=0',
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
