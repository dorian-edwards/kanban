import { useOverlayContext } from '../../contexts/OverlayContext'
import { useBoardDataContext } from '../../contexts/StateManagement'
import { TaskInterface } from '../../interfaces/DataInterfaces'
import {
  extractSubtasks,
  reduceSubtasks,
} from '../../utilities/dataManipulation'
import TaskDetails from './TaskDetails'

export default function TaskPreview({ task }: { task: TaskInterface }) {
  const { setModal, setOverlayActive } = useOverlayContext()
  const { subtasks } = useBoardDataContext()
  const activeSubtasks = extractSubtasks(task.id, subtasks)

  const complete = activeSubtasks.reduce(reduceSubtasks, 0)

  return (
    <button
      className='task-card block bg-white px-16px py-[2.3rem] rounded-sm w-full max-w-[28rem] min-w-[28rem] shadow-sm mb-[2rem]'
      onClick={() => {
        setModal(<TaskDetails task={task} />)
        setOverlayActive(true)
      }}
    >
      <h4 className='task-title font-bold text-[1.5rem] mb-[0.8rem]'>
        {task.title}
      </h4>
      <p className='task-count text-med-gray text-xs'>{`${complete} of ${activeSubtasks.length} substasks`}</p>
    </button>
  )
}
