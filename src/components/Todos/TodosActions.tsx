import { AiFillInteraction, AiFillDelete } from 'react-icons/ai'

import { Button } from '../UI/Button'

type TodosActionsProps = {
  resetTodos: () => void
  deleteCompletedTodos: () => void
  completedTodosExist: boolean
}

export const TodosActions = ({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}: TodosActionsProps) => {
  return (
    <>
      <Button title="Reset Todos" onClick={resetTodos}>
        <AiFillInteraction />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}>
        <AiFillDelete />
      </Button>
    </>
  )
}
