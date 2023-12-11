import ColumnSelector from './ColumnSelector'
import SubtaskCard from './SubtaskCard'
import { EditType, TaskInterface } from '../../interfaces/DataInterfaces'
import { useBoardDataContext } from '../../contexts/StateManagement'
import {
  extractSubtasks,
  reduceSubtasks,
} from '../../utilities/dataManipulation'
import Edit from '../Edit'

export default function TaskDetails({ task }: { task: TaskInterface }) {
  const { subtasks } = useBoardDataContext()
  const activeSubtasks = extractSubtasks(task.id, subtasks)

  const complete = activeSubtasks.reduce(reduceSubtasks, 0)

  return (
    <div className='task-details p-32px bg-white rounded-sm'>
      <div className='heading mb-24px flex justify-between items-center relative'>
        <h2 className='task-title text-black text-18px font-bold'>
          {task.title}
        </h2>
        <Edit type={EditType.task} taskId={task.id} disabled={false} />
      </div>

      <p className='task-description text-sm text-med-gray font-medium leading-extra-loose mb-24px'>
        {task.description}
      </p>

      <div className='subtasks-wrapper'>
        <h3 className='subtasks-counter text-med-gray text-xs font-bold mb-16px'>{`Subtasks (${complete} of ${activeSubtasks.length})`}</h3>
        <ul className='flex flex-col gap-[0.8rem] mb-24px'>
          {activeSubtasks.map((subtask) => (
            <li key={subtask.id}>
              <SubtaskCard id={subtask.id} />
            </li>
          ))}
        </ul>
      </div>
      <ColumnSelector task={task} />
    </div>
  )
}
