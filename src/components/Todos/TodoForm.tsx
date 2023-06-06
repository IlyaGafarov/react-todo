import React from 'react'
import style from './TodoForm.module.css'

import { Button } from '../UI/Button'

type TodoFormProps = {
  addTodo: (text: string) => void
}

export const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [text, setText] = React.useState('')

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <div className={style.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input placeholder="New todo" value={text} onChange={(e) => setText(e.target.value)} />
        <Button type="submit" title="Push">
          Push
        </Button>
      </form>
    </div>
  )
}
