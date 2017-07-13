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
          src: 'http://ui.specbee.com/sample/bird.mp4',
          img: 'http://www.airfields-freeman.com/TX/GreaterSW_TX_field_02.jpg'
        },
        details: [
          // eslint-disable-next-line
          'Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.',
          // eslint-disable-next-line
          'Tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.'
        ]
      },
      {
        name: 'Twitcha',
        color: '#65bdcb',
        year: '2011',
        items: ['Design', 'Front-end development'],
        media: {
          alt: 'A picture blah blah blah',
          src: 'http://ui.specbee.com/sample/bird.mp4',
          img: 'http://www.airfields-freeman.com/TX/GreaterSW_TX_field_02.jpg'
        },
        details: [
          // eslint-disable-next-line
          'Suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.',
          // eslint-disable-next-line
          'Tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.'
        ]
      }
    ]}
  />,
  document.getElementById('root')
)
