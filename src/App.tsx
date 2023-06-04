import React from 'react'
import './App.css'

import { TodoForm } from './components/Todos/TodoForm'
import { TodoLIst } from './components/Todos/TodoList'

export const App = () => {
  const [todos, setTodos] = React.useState<string[]>([])

  const addTodoHandler = (text: string) => {
    setTodos([...todos, text])
  }

  const deleteTodoHandler = (index: number) => {
    setTodos(todos.filter((_, idx) => idx !== index))
  }

  return (
    <div className="App">
      <h1>Todo App</h1>

      <TodoForm addTodo={addTodoHandler} />
      <TodoLIst todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  )
}
