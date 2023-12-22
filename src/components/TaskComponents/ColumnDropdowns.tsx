import { forwardRef } from 'react'
import {
  useBoardDataContext,
  useBoardDispatchContext,
} from '../../contexts/StateManagement'
import { DATA_ACTION, TaskInterface } from '../../interfaces/DataInterfaces'
import { useOverlayContext } from '../../contexts/OverlayContext'

// interface Props {
//   task: TaskInterface
// }
// type Ref = HTMLDivElement

export const ColumnSelect = forwardRef<HTMLDivElement, { task: TaskInterface }>(
  function ColumnSelect({ task }, ref) {
    const { setOverlayActive } = useOverlayContext()
    const { activeBoard, columns } = useBoardDataContext()
    const dispatch = useBoardDispatchContext()

    const activeColumns = Object.values(columns).filter(
      (column) => column.boardId === activeBoard
    )

    function handleColumnSelect(
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
      dispatch({
        type: DATA_ACTION.UPDATE_TASK,
        payload: { ...task, columnId: e.currentTarget.value },
      })
    }

    return (
      <div
        className='column-choices rounded-sm bg-white p-16px absolute w-full mt-[0.8rem] text-sm font-medium leading-extra-loose text-med-gray'
        ref={ref}
      >
        <ul className='flex flex-col gap-[0.8rem]'>
          {activeColumns.map((column) => (
            <li key={column.id}>
              <button
                className='w-full'
                value={column.id}
                onClick={(e) => {
                  handleColumnSelect(e)
                  setOverlayActive(false)
                }}
              >
                {column.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
)

export const InitialColumn = forwardRef<
  HTMLDivElement,
  { onSelect: () => void; setStatus: (id: string) => void }
>(function ColumnSelect({ onSelect, setStatus }, ref) {
  const { setOverlayActive } = useOverlayContext()
  const { activeBoard, columns } = useBoardDataContext()
  const dispatch = useBoardDispatchContext()

  const activeColumns = Object.values(columns).filter(
    (column) => column.boardId === activeBoard
  )

  function handleColumnSelect(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setStatus(e.currentTarget.value)
  }

  return (
    <div
      className='column-choices rounded-sm bg-white p-16px absolute w-full mt-[0.8rem] text-sm font-medium leading-extra-loose text-med-gray'
      ref={ref}
    >
      <ul className='flex flex-col gap-[0.8rem]'>
        {activeColumns.map((column) => (
          <li key={column.id}>
            <button
              className='w-full'
              value={column.id}
              onClick={(e) => {
                handleColumnSelect(e)
                onSelect()
                // setOverlayActive(false)
              }}
            >
              {column.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
})
