import { useState, createRef, useEffect } from 'react'
import ChevronDown from './icons/ChevronDown'
import ChevronUp from './icons/ChevronUp'
import VerticalEllipsis from './icons/VerticalEllipsis'
import ColumnSelector from './ColumnSelector'
import EditMenu from './EditMenu'
import SubTaskCard from './SubTaskCard'
import { SubtaskInterface, TaskInterface } from '../interfaces/DataInterfaces'

export default function TaskDetails({
  task: { id, title, description },
  subtasks,
  complete,
}: {
  task: TaskInterface
  subtasks: SubtaskInterface[]
  complete: number
}) {
  const [menuActive, setMenuActive] = useState<boolean>(false)
  const [selectColumnActive, setSelectColumnActive] = useState<boolean>(false)
  const editMenuRef = createRef<HTMLDivElement>() // <- this
  const columnSelectRef = createRef<HTMLDivElement>()

  // Add event handler to detect if user clicks outside of edit modal
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

  // Same for column status selector
  useEffect(() => {
    if (!selectColumnActive) return
    function handleColumnSelectOutsideClick(e: MouseEvent) {
      if (
        columnSelectRef.current &&
        !columnSelectRef.current.contains(e.target as HTMLElement)
      )
        setSelectColumnActive((prev) => !prev)
    }

    setTimeout(
      () => document.addEventListener('click', handleColumnSelectOutsideClick),
      500
    )

    return () =>
      document.removeEventListener('click', handleColumnSelectOutsideClick)
  }, [selectColumnActive, columnSelectRef])

  return (
    <div className='task-details p-32px bg-white rounded-sm'>
      <div className='heading mb-24px flex justify-between items-center relative'>
        <h2 className='task-title text-black text-18px font-bold'>{title}</h2>
        <button onClick={() => setMenuActive((prev) => !prev)}>
          <VerticalEllipsis />
        </button>
        {menuActive ? <EditMenu ref={editMenuRef} /> : null}
      </div>

      <p className='task-description text-sm text-med-gray font-medium leading-extra-loose mb-24px'>
        {description}
      </p>

      <div className='subtasks-wrapper'>
        <h3 className='subtasks-counter text-med-gray text-xs font-bold mb-16px'>{`Subtasks (${complete} of ${subtasks.length})`}</h3>
        <ul className='flex flex-col gap-[0.8rem] mb-24px'>
          {subtasks.map((subtask) => (
            <li key={subtask.id}>
              <SubTaskCard subtask={subtask} />
            </li>
          ))}
        </ul>
      </div>

      <div className='column-selector-wrapper'>
        <h3 className='column-selector-title text-med-gray text-xs font-bold mb-[0.8rem]'>
          Current Status
        </h3>
        <div className='relative'>
          <button
            className='flex items-center justify-between w-full px-16px py-[0.8rem] border border-cool-gray rounded-sm'
            onClick={() => setSelectColumnActive((prev) => !prev)}
          >
            <span className='text-sm font-medium leading-extra-loose'>
              {'Doing'}
            </span>
            {selectColumnActive ? <ChevronUp /> : <ChevronDown />}
          </button>
          {selectColumnActive ? <ColumnSelector ref={columnSelectRef} /> : null}
        </div>
      </div>
    </div>
  )
}
