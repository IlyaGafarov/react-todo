import { FaFile } from 'react-icons/fa'
import style from './Todo.module.css'

type TodoProps = {
  todo: string
  index: number
  deleteTodo: (index: number) => void
}

export const Todo = ({ todo, index, deleteTodo }: TodoProps) => {
  return (
    <div className={style.todo} onDoubleClick={() => deleteTodo(index)}>
      <FaFile className={style.todoIcon} />
      <div className={style.todoText}>{todo}</div>
    </div>
  )
}
