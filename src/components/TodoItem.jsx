import React, { Component } from 'react'

class TodoItem extends Component {
  render () {
    return (
      <li>
        {this.props.title} <button onClick={this.props.onDelete}>delete</button>
      </li>
    )
  }
}

export default TodoItem
