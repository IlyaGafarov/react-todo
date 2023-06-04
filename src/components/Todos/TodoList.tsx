import style from './TodoList.module.css'
import { Todo } from './Todo'

type TodosProps = {
  todos: string[]
  deleteTodo: (index: number) => void
}

export const TodoLIst = ({ todos, deleteTodo }: TodosProps) => {
  return (
    <div className={style.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}

      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  )
}
