import React, { Component, PropTypes } from 'react'
import './Checklist.css'
import Icon from '../Icon/Icon'

class Checklist extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render () {
    const items = this.props.items
    const check = <Icon color="active" name="Check" label="Checkmark" />

    return (
      <ul className="Checklist">
        {
          items.map(function (item, index) {
            return <li className="Checklist__Item" key={index}>{check} {item}</li>
          })
        }
      </ul>
    )
  }
}

export default Checklist
