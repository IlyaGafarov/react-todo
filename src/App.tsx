import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import './App.css'

import { TodoForm } from './components/Todos/TodoForm'
import { TodoLIst } from './components/Todos/TodoList'

export type ITodo = {
  text: string
  isCompleted: boolean
  id: string
}

export const App = () => {
  const [todos, setTodos] = React.useState<ITodo[]>([])

  const addTodoHandler = (text: string) => {
    const newTodo: ITodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodoHandler = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo },
      ),
    )
  }

  const deleteTodoHandler = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="App">
      <h1>Todo App</h1>

      <TodoForm addTodo={addTodoHandler} />
      <TodoLIst todos={todos} toggleTodo={toggleTodoHandler} deleteTodo={deleteTodoHandler} />
    </div>
  )
}
