import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import './index.css'

ReactDOM.render(
  <App
    projectData={[
      {
        name: 'ClubWorx',
        color: '#f17310',
        year: '2014',
        items: ['Design', 'Front-end development'],
        media: {
          alt: 'A picture blah blah blah',
          src: 'https://www.w3schools.com/html/mov_bbb.mp4?fart=0',
          img: 'https://www.watfordfc.com/sites/default/files/social-hero-deeney_0.jpg'
        },
        details: [
          'Vivamus suscipit tortor eget felis porttitor volutpat.',
          'Tortor eget felis porttitor volutpat.'
        ]
      },
      {
        name: 'Twitcha',
        color: '#65bdcb',
        year: '2011',
        items: ['Design', 'Front-end development'],
        media: {
          alt: 'A picture blah blah blah',
          src: '/video/screencast-twitcha.mp4',
          img: '/img/poster-twitcha.png'
        },
        details: [
          'Twitcha is still pretty awesome.',
          'Best thing I ever did!'
        ]
      },
      {
        name: 'Something with an image',
        color: '#69be28',
        year: '2013',
        items: ['Design', 'Front-end development'],
        media: {
          alt: 'A picture blah blah blah',
          img: '/img/poster-twitcha.png'
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
