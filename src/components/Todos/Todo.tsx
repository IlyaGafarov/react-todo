import { AiOutlineDelete, AiOutlineBook } from 'react-icons/ai'
import { BsFileEarmarkCheck } from 'react-icons/bs'

import style from './Todo.module.css'

import { ITodo } from '../../App'

type TodoProps = {
  todo: ITodo
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

export const Todo = ({ todo, toggleTodo, deleteTodo }: TodoProps) => {
  return (
    <li className={`${style.todo} ${todo.isCompleted ? style.completedTodo : ''}`}>
      <AiOutlineBook className={style.todoIcon} />
      <div className={style.todoText}>{todo.text}</div>
      <AiOutlineDelete className={style.deleteIcon} onClick={() => deleteTodo(todo.id)} />
      <BsFileEarmarkCheck className={style.checkIcon} onClick={() => toggleTodo(todo.id)} />
    </li>
  )
}
