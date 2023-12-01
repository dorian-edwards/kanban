import { Task, SubTask } from '../interfaces'

export default function TaskCard({
  task: { id, title, description, subtasks },
}: {
  task: Task
}) {
  function reduceSubTasks(n: number, subtask: SubTask): number {
    return subtask.complete ? n + 1 : n
  }

  const complete = subtasks.reduce(reduceSubTasks, 0)

  return (
    <div className='task-card bg-white px-[1.6rem] py-[2.3rem] rounded-sm w-full max-w-[28rem] min-w-[28rem] shadow-sm mb-[2rem]'>
      <h4 className='task-title font-bold text-[1.5rem] mb-[0.8rem]'>
        {title}
      </h4>
      <p className='task-count text-med-gray text-[1.2rem]'>{`${complete} of ${subtasks.length} substasks`}</p>
    </div>
  )
}
