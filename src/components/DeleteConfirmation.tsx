import { useOverlayContext } from '../contexts/OverlayContext'
import {
  useBoardDataContext,
  useBoardDispatchContext,
} from '../contexts/StateManagement'
import { DATA_ACTION, EditType } from '../interfaces/DataInterfaces'
import ButtonDelete from './Buttons/ButtonDelete'
import ButtonSecondary from './Buttons/ButtonSecondary'
import useScreenMonitor from './Hooks/useScreenMonitor'

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
  const mobile = useScreenMonitor()

  const target = taskId ? tasks[taskId].title : boards[activeBoard].title

  const boardText = `Are you sure you want to delete the ‘${target}’ board? This action will remove all columns and tasks and cannot be reversed.`

  const taskText = `Are you sure you want to delete the ‘${target}’ task and its subtasks? This action cannot be reversed.`

  function handleDelete() {
    if (taskId) {
      dispatch({
        type: DATA_ACTION.DELETE_TASK,
        payload: { id: taskId },
      })
    } else {
      dispatch({
        type: DATA_ACTION.DELETE_BOARD,
        payload: { id: activeBoard },
      })
    }
    setOverlayActive(false)
  }

  return (
    <div className='delete-confirmation w-11/12 mx-auto max-w-[48rem] bg-white dark:bg-dark-gray p-24px rounded-sm'>
      <h2 className='delete-heading text-red font-bold text-lg mb-24px'>
        {`Delete this ${type}?`}
      </h2>
      <p className='delete-prompt text-med-gray text-sm font-medium leading-extra-loose mb-24px'>
        {type === EditType.board ? boardText : taskText}
      </p>
      <div className={`btn-wrapper flex gap-16px ${mobile ? 'flex-col' : ''}`}>
        <ButtonDelete onClick={handleDelete}>Delete</ButtonDelete>
        <ButtonSecondary onClick={() => setOverlayActive(false)}>
          Cancel
        </ButtonSecondary>
      </div>
    </div>
  )
}
