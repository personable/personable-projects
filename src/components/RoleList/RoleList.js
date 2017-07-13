import React, { Component, PropTypes } from 'react'
import './RoleList.css'
import Icon from '../Icon/Icon'

class RoleList extends Component {
  static propTypes = {
    frontEnd: PropTypes.bool,
    design: PropTypes.bool
  }

  render () {
    const check = <Icon color="active" name="Check" label="Checkmark" />
    return (
      <ul className="RoleList">
        {(this.props.design) ? <li className="RoleList__Item">{check} Design</li> : null}
        {(this.props.frontEnd) ? <li className="RoleList__Item">{check} Front End</li> : null}
      </ul>
    )
  }
}

export default RoleList
