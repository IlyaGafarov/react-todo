import style from './TodoList.module.css'
import { ITodo } from '../../App'
import { Todo } from './Todo'

type TodosProps = {
  todos: ITodo[]
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

export const TodoLIst = ({ todos, toggleTodo, deleteTodo }: TodosProps) => {
  return (
    <ul className={style.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}

      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  )
}
