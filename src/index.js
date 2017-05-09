import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import './index.css'

ReactDOM.render(
  <App
    projectData={[
      {
        name: 'Deep Blue',
        color: '#f17310'
      },
      {
        name: 'Fire',
        color: 'OrangeRed'
      },
      {
        name: 'Forest',
        color: 'MediumSpringGreen'
      }
    ]}
  />,
  document.getElementById('root')
)
