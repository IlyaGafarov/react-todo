import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import './App.css'

import { TodoForm } from './components/Todos/TodoForm'
import { TodoLIst } from './components/Todos/TodoList'
import { TodosActions } from './components/Todos/TodosActions'

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

  const resetTodosHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <h1>Todo App</h1>

      <TodoForm addTodo={addTodoHandler} />

      {!!todos.length && (
        <TodosActions
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
          completedTodosExist={!!completedTodosCount}
        />
      )}
      <TodoLIst todos={todos} toggleTodo={toggleTodoHandler} deleteTodo={deleteTodoHandler} />

      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        } `}</h2>
      )}
    </div>
  )
}
