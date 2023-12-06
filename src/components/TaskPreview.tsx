import { useOverlayContext } from '../contexts/OverlayContext'
import { Task } from '../interfaces'
import reduceSubTasks from '../utilities/ReduceTaks'
import TaskDetails from './TaskDetails'

export default function TaskCard({ task }: { task: Task }) {
  const { setModal, setOverlayActive } = useOverlayContext()

  const complete = task.subtasks.reduce(reduceSubTasks, 0)

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
      <p className='task-count text-med-gray text-xs'>{`${complete} of ${task.subtasks.length} substasks`}</p>
    </button>
  )
}
