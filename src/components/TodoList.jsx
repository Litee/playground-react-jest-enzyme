import React from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'

export default class TodoList extends React.Component {
  constructor () {
    super()
    this.state = {
      todos: []
    }
    this.onAddTodo = newTodo => {
      this.setState(prevState => {
        return {
          todos: prevState.todos.some(t => t === newTodo)
            ? prevState.todos
            : [...prevState.todos, newTodo]
        }
      })
    }
    this.onDeleteTodo = todoToRemove => {
      this.setState(prevState => {
        return {
          todos: prevState.todos.filter(t => t !== todoToRemove)
        }
      })
    }
  }

  render () {
    const items = [...this.state.todos].map(todo => (
      <TodoItem
        key={todo}
        title={todo}
        onDelete={this.onDeleteTodo.bind(this, todo)}
      />
    ))
    return (
      <div>
        <h2>TODO Items:</h2>
        <ul>{items}</ul>
        <AddTodo onAddTodo={this.onAddTodo} />
      </div>
    )
  }
}
