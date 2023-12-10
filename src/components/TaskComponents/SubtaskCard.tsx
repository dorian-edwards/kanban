import CheckMark from '../icons/Check'
import {
  useBoardDataContext,
  useBoardDispatchContext,
} from '../../contexts/StateManagement'
import { DataAction } from '../../interfaces/DataInterfaces'

export default function SubtaskCard({ id }: { id: string }) {
  const { subtasks } = useBoardDataContext()
  const subtask = subtasks[id]

  const dispatch = useBoardDispatchContext()
  const handleToggle = () => {
    dispatch({
      type: DataAction.toggleSubtaskComplete,
      payload: {
        id,
        complete: !subtask.complete,
      },
    })
  }

  return (
    <button
      className='subtask-card bg-lgt-gray py-12px pl-12px pr-16px flex gap-16px items-center rounded-sm w-full'
      onClick={handleToggle}
    >
      <div
        className={`h-16px w-16px shrink-0 border border-cool-gray flex justify-center items-center rounded-xs ${
          subtask.complete ? 'bg-primary-purple' : 'bg-white'
        }`}
      >
        {subtask.complete ? <CheckMark /> : null}
      </div>
      <p
        className={`text-xs font-bold ${
          subtask.complete ? 'opacity-[0.5] line-through' : ''
        }`}
      >
        {subtask.description}
      </p>
    </button>
  )
}