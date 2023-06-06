import { RiRefreshLine, RiDeleteBin2Line } from 'react-icons/ri'
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
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}>
        <RiDeleteBin2Line />
      </Button>
    </>
  )
}
