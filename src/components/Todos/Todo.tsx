import { FaFile, FaCheck } from 'react-icons/fa'
import { RiDeleteBin2Line } from 'react-icons/ri'
import style from './Todo.module.css'

import { ITodo } from '../../App'

type TodoProps = {
  todo: ITodo
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

export const Todo = ({ todo, toggleTodo, deleteTodo }: TodoProps) => {
  return (
    <div className={`${style.todo} ${todo.isCompleted ? style.completedTodo : ''}`}>
      <FaFile className={style.todoIcon} />
      <div className={style.todoText}>{todo.text}</div>
      <RiDeleteBin2Line className={style.deleteIcon} onClick={() => deleteTodo(todo.id)} />
      <FaCheck className={style.checkIcon} onClick={() => toggleTodo(todo.id)} />
    </div>
  )
}
