import { useBoardDataContext } from '../contexts/StateManagement'
import { ColumnInterface } from '../interfaces/DataInterfaces'
import { extractTasks } from '../utilities/dataExtraction'
import TaskPreview from './TaskPreview'

export default function Column({ id, title, boardId }: ColumnInterface) {
  const { tasks } = useBoardDataContext()

  const activeTasks = extractTasks(id, tasks)

  return (
    <div className='column-wrapper'>
      <h3 className='column-title mb-24px text-med-gray tracking-wide font-bold text-xs flex items-center gap-x-12px'>
        {/* Maybe make this little circle a color picker? */}
        <span className='column-color inline-block h-[1.5rem] w-[1.5rem] rounded-xl bg-primary-purple-hover' />
        {`${title} (${activeTasks.length})`}
      </h3>
      <ul>
        {activeTasks.map((task) => (
          <TaskPreview key={task.id} task={task} />
        ))}
      </ul>
    </div>
  )
}
