import { ColumnInterface } from '../interfaces'
import TaskCard from './TaskCard'

export default function Column({ title, tasks }: ColumnInterface) {
  return (
    <div className='column-wrapper'>
      <h3 className='column-title mb-[2.4rem] text-med-gray tracking-wide font-bold text-[1.2rem] flex items-center gap-x-[1.2rem]'>
        {/* Maybe make this little circle a color picker? */}
        <span className='column-color inline-block h-[1.5rem] w-[1.5rem] rounded-xl bg-primary-purple-hover' />
        {`${title} (${tasks.length})`}
      </h3>
      <ul>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </ul>
    </div>
  )
}
