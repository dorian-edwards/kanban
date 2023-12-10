import { useState, createRef, useEffect } from 'react'
import VerticalEllipsis from '../icons/VerticalEllipsis'
import ColumnSelector from './ColumnSelector'
import EditMenu from '../EditMenu'
import SubtaskCard from './SubtaskCard'
import { TaskInterface } from '../../interfaces/DataInterfaces'
import { useBoardDataContext } from '../../contexts/StateManagement'
import { extractSubtasks, reduceSubtasks } from '../../utilities/dataExtraction'

export default function TaskDetails({ task }: { task: TaskInterface }) {
  const [menuActive, setMenuActive] = useState<boolean>(false)
  const editMenuRef = createRef<HTMLDivElement>() // <- this
  const { subtasks } = useBoardDataContext()
  const activeSubtasks = extractSubtasks(task.id, subtasks)

  const complete = activeSubtasks.reduce(reduceSubtasks, 0)

  useEffect(() => {
    if (!menuActive) return
    function handleEditMenuOutsideClick(e: MouseEvent) {
      if (
        editMenuRef.current &&
        !editMenuRef.current.contains(e.target as HTMLElement)
      )
        setMenuActive((prev) => !prev)
    }

    setTimeout(
      () => document.addEventListener('click', handleEditMenuOutsideClick),
      500
    ) // <- this

    return () =>
      document.removeEventListener('click', handleEditMenuOutsideClick)
  }, [menuActive, editMenuRef])

  return (
    <div className='task-details p-32px bg-white rounded-sm'>
      <div className='heading mb-24px flex justify-between items-center relative'>
        <h2 className='task-title text-black text-18px font-bold'>
          {task.title}
        </h2>
        <button onClick={() => setMenuActive((prev) => !prev)}>
          <VerticalEllipsis />
        </button>
        {menuActive ? <EditMenu ref={editMenuRef} /> : null}
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
