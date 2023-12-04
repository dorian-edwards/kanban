import { useEffect, useState, forwardRef, useRef, createRef } from 'react'
import { useOverlayContext } from '../contexts/OverlayContext'
import { Task, SubTask } from '../interfaces'
import CheckMark from './icons/Check'
import ChevronDown from './icons/ChevronDown'
import VerticalEllipsis from './icons/VerticalEllipsis'
import ChevronUp from './icons/ChevronUp'

export default function TaskCard({ task }: { task: Task }) {
  const { setModal, setOverlayActive } = useOverlayContext()

  function reduceSubTasks(n: number, subtask: SubTask): number {
    return subtask.complete ? n + 1 : n
  }

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

export function TaskDetails({
  task: { id, title, description, subtasks },
}: {
  task: Task
}) {
  const [menuActive, setMenuActive] = useState<boolean>(false)
  const [selectColumnActive, setSelectColumnActive] = useState<boolean>(false)
  const editMenuRef = createRef<HTMLDivElement>() // <- this
  const columnSelectRef = createRef<HTMLDivElement>()

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

  function reduceSubTasks(n: number, subtask: SubTask): number {
    return subtask.complete ? n + 1 : n
  }

  const complete = subtasks.reduce(reduceSubTasks, 0)
  return (
    <div className='task-detailed p-32px bg-white rounded-sm'>
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
          <SubTaskCard />
          <SubTaskCard />
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

// Todo Add props
export function SubTaskCard() {
  // Replace with prop
  // Will need dispatch to toggle state
  const [complete, setComplete] = useState<boolean>(false)
  return (
    <button
      className='subtask-card bg-lgt-gray py-12px pl-12px pr-16px flex gap-16px items-center rounded-sm'
      onClick={() => setComplete((prev) => !prev)}
    >
      <div
        className={`h-16px w-16px shrink-0 border border-cool-gray flex justify-center items-center rounded-xs ${
          complete ? 'bg-primary-purple' : 'bg-white'
        }`}
      >
        {complete ? <CheckMark /> : null}
      </div>
      <p
        className={`text-xs font-bold ${
          complete ? 'opacity-[0.5] line-through' : ''
        }`}
      >
        Talk to potential customers about our proposed solution and ask for fair
        price expectancy
      </p>
    </button>
  )
}

interface Props {}
type Ref = HTMLDivElement

export const EditMenu = forwardRef<Ref, Props>(function EditMenu(props, ref) {
  // <- this
  return (
    <div
      className='task-menu bg-white p-16px absolute w-[19.2rem] rounded-sm tablet:right-[-9.7rem] tablet:top-[6.6rem] right-0 top-[4rem] shadow-md'
      ref={ref}
    >
      <button className='block text-sm font-med leading-extra-loose text-med-gray font-medium mb-16px'>
        Edit Task
      </button>
      <button className='block text-sm font-med leading-extra-loose text-red font-medium'>
        Delete Task
      </button>
    </div>
  )
})

export const ColumnSelector = forwardRef<Ref, Props>(function ColumnSelector(
  props,
  ref
) {
  return (
    <div
      className='column-choices rounded-sm bg-white p-16px absolute w-full mt-[0.8rem] text-sm font-medium leading-extra-loose text-med-gray'
      ref={ref}
    >
      <ul className='flex flex-col gap-[0.8rem]'>
        <li>
          <button className='w-full'>Todo</button>
        </li>
        <li>
          <button className='w-full'>Doing</button>
        </li>
        <li>
          <button className='w-full'>Done</button>
        </li>
      </ul>
    </div>
  )
})
