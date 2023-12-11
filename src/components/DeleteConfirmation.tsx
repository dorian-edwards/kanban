import { useOverlayContext } from '../contexts/OverlayContext'
import {
  useBoardDataContext,
  useBoardDispatchContext,
} from '../contexts/StateManagement'
import { DataAction, EditType } from '../interfaces/DataInterfaces'
import ButtonDelete from './Buttons/ButtonDelete'
import ButtonSecondary from './Buttons/ButtonSecondary'

export default function DeleteConfirmation({
  type,
  taskId,
}: {
  type: string
  taskId?: string
}) {
  const dispatch = useBoardDispatchContext()
  const { setOverlayActive } = useOverlayContext()
  const { tasks, boards, activeBoard } = useBoardDataContext()

  const target = taskId ? tasks[taskId].title : boards[activeBoard].title

  const boardText = `Are you sure you want to delete the ‘${target}’ board? This action will remove all columns and tasks and cannot be reversed.`

  const taskText = `Are you sure you want to delete the ‘${target}’ task and its subtasks? This action cannot be reversed.`

  function handleDelete() {
    if (taskId) {
      dispatch({
        type: DataAction.deleteTask,
        payload: { id: taskId },
      })
      return
    }

    dispatch({
      type: DataAction.deleteBoard,
      payload: { id: activeBoard },
    })
    setOverlayActive(false)
  }

  return (
    <div className='delete-confirmation w-full max-w-[48rem] bg-white p-32px pb-[4rem] rounded-sm'>
      <h2 className='delete-heading text-red font-bold text-lg mb-24px'>
        {`Delete this ${type}?`}
      </h2>
      <p className='delete-prompt text-med-gray text-sm font-medium leading-extra-loose mb-24px'>
        {type === EditType.board ? boardText : taskText}
      </p>
      <div className='btn-wrapper flex gap-16px'>
        <ButtonDelete onClick={handleDelete}>Delete</ButtonDelete>
        <ButtonSecondary onClick={() => setOverlayActive(false)}>
          Cancel
        </ButtonSecondary>
      </div>
    </div>
  )
}
