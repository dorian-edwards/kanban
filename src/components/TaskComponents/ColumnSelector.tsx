import { useState, createRef, useEffect } from 'react'
import { ColumnSelect, InitialColumn } from './ColumnDropdowns'
import ChevronDown from '../icons/ChevronDown'
import ChevronUp from '../icons/ChevronUp'
import { TaskInterface } from '../../interfaces/DataInterfaces'
import { useBoardDataContext } from '../../contexts/StateManagement'

export default function ColumnSelector({
  task,
  status,
  additionalStyling,
  changeStatus,
}: {
  task?: TaskInterface
  status?: string
  additionalStyling?: string
  changeStatus?: (id: string) => void
}) {
  const { columns } = useBoardDataContext()
  //const columnTitle = columns[task.columnId].title // <-
  const [selectColumnActive, setSelectColumnActive] = useState<boolean>(false)
  const columnSelectRef = createRef<HTMLDivElement>()

  // if an existing task get tasks current status (column)
  // else get columns belonging to active board and set to first
  // this latter scenario is occurring when we're creating tasks
  const currentStatus = task ? columns[task.columnId].title : status

  // based on whether or not we have a task we'll either render a column dropdown for changing the status of an existing column or anothr dropdown that sets the status(column) of the task to be created

  const dropdown = task ? (
    <ColumnSelect ref={columnSelectRef} task={task} />
  ) : (
    <InitialColumn
      ref={columnSelectRef}
      onSelect={() => setSelectColumnActive(false)}
      setStatus={changeStatus || ((id: string) => {})} // <- this is questionable ...
    />
  )

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
    <div className={`column-selector-wrapper ${additionalStyling}`}>
      <h3 className='column-selector-title text-med-gray text-xs font-bold mb-[0.8rem]'>
        {`${task ? 'Current ' : ''}Status`}
      </h3>
      <div className='relative'>
        <button
          type='button'
          className='flex items-center justify-between w-full px-16px py-[0.8rem] border border-cool-gray rounded-sm'
          onClick={() => setSelectColumnActive((prev) => !prev)}
        >
          <span className='text-sm font-medium leading-extra-loose'>
            {/* {columnTitle} */}
            {currentStatus}
          </span>
          {selectColumnActive ? <ChevronUp /> : <ChevronDown />}
        </button>
        {selectColumnActive
          ? // <ColumnDropdown ref={columnSelectRef} task={task} />
            dropdown
          : null}
      </div>
    </div>
  )
}
