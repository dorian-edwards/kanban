import { useBoardDataContext } from '../../contexts/StateManagement'
import { ColumnInterface } from '../../interfaces/DataInterfaces'
import colors from '../../utilities/columnColors'
import { extractTasks } from '../../utilities/dataUtilities'
import TaskPreview from '../TaskComponents/TaskPreview'

export default function Column({
  id,
  title,
  boardId,
  color,
}: {
  id: string
  title: string
  boardId: string
  color: number
}) {
  const { tasks } = useBoardDataContext()

  const activeTasks = extractTasks(id, tasks)

  return (
    <div className='column-wrapper w-full'>
      <h3 className='column-title mb-24px text-med-gray tracking-wide font-bold text-xs flex items-center gap-x-12px'>
        {/* Maybe make this little circle a color picker? */}
        <span
          className='column-color inline-block h-[1.5rem] w-[1.5rem] rounded-xl bg-primary-purple-hover'
          style={{ backgroundColor: colors[color % colors.length] }}
        />
        {`${title} ${
          activeTasks.length !== 0 ? `(${activeTasks.length})` : ''
        }`}
      </h3>
      <ul>
        {activeTasks.map((task) => (
          <TaskPreview key={task.id} task={task} />
        ))}
      </ul>
    </div>
  )
}
