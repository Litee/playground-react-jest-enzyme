import React, { Component } from 'react'

class AddTodo extends Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = e => {
      this.setState({ value: e.target.value })
    }
    this.handleSubmit = e => {
      this.props.onAddTodo(this.state.value)
      this.setState({ value: '' })
      e.preventDefault()
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>add</button>
      </form>
    )
  }
}

export default AddTodo
