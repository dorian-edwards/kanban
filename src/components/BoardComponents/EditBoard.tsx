import { FormEvent, useState } from 'react'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import ButtonSecondary from '../Buttons/ButtonSecondary'
import keyGen from '../../utilities/keyGen'
import {
  useBoardDataContext,
  useBoardDispatchContext,
} from '../../contexts/StateManagement'
import { useOverlayContext } from '../../contexts/OverlayContext'
import { DATA_ACTION } from '../../interfaces/DataInterfaces'
import DynamicInput from '../FormElements/DynamicInput'
import Input from '../FormElements/Input'
import Label from '../FormElements/Label'
import { arrayToObject, extractColumns } from '../../utilities/dataUtilities'

export interface BoardForm {
  id: string
  title: string
  columns: { id: string; title: string }[]
}

export default function EditBoard() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const state = useBoardDataContext()
  const { setOverlayActive } = useOverlayContext()
  const activeBoard = state.boards[state.activeBoard]
  const startingColumns = extractColumns(activeBoard.id, state.columns)

  const [board, setBoard] = useState<BoardForm>({
    id: activeBoard.id,
    title: activeBoard.title,
    columns: [...startingColumns.map(({ id, title }) => ({ id, title }))],
  })
  const dispatch = useBoardDispatchContext()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errorTimeout, setErrorTimeOut] = useState<NodeJS.Timeout | undefined>()

  const handleAddColumn = () => {
    setBoard({
      ...board,
      columns: [...board.columns, { id: keyGen('C'), title: '' }],
    })
  }

  const handleRemoveColumn = (id: string) => {
    setBoard({
      ...board,
      columns: board.columns.filter((column) => column.id !== id),
    })
  }

  const handleColumnInputChange = (
    e: React.FormEvent<HTMLInputElement>,
    index: number
  ) => {
    setIsSubmitted(false)
    const copy = { ...board, columns: [...board.columns] }
    copy.columns[index].title = e.currentTarget.value
    setBoard(copy)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isFormValid()) {
      setIsSubmitted(true)
      setErrorTimeOut(
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      )
      return
    }

    const newColumns = arrayToObject<{ id: string; title: string }>(
      board.columns
    )

    for (let column of startingColumns) {
      if (!(column.id in newColumns)) {
        dispatch({
          type: DATA_ACTION.DELETE_COLUMN,
          payload: { id: column.id },
        })
      }
    }

    for (let column of board.columns) {
      dispatch({
        type: DATA_ACTION.CREATE_COLUMN,
        payload: { ...column, boardId: board.id },
      })
    }

    dispatch({
      type: DATA_ACTION.UPDATE_BOARD,
      payload: { id: board.id, title: board.title },
    })

    dispatch({
      type: DATA_ACTION.SET_ACTIVE_BOARD,
      payload: { id: board.id },
    })

    setOverlayActive(false)
  }

  const isFormValid = (): boolean => {
    let result = true
    if (board.title.trim() === '') result = false

    for (let column of board.columns) {
      if (column.title.trim() === '') result = false
    }

    return result
  }

  return (
    <div className='bg-white p-24px rounded-sm mx-[16px]'>
      <form onSubmit={handleSubmit}>
        <h2 className='mb-24px font-bold text-18px'>Edit Board</h2>
        <div className='mb-24px'>
          <Label htmlFor='board-name'>Board Name</Label>
          <Input
            type='text'
            id='board-name'
            value={board.title}
            onChange={(e: FormEvent<HTMLInputElement>) => {
              setIsSubmitted(false)
              setBoard({ ...board, title: e.currentTarget.value })
            }}
            isSubmitted={isSubmitted}
          />
        </div>
        <div className='mb-12px'>
          <Label>Board Columns</Label>
          {board.columns.map(({ id, title }, index) => {
            return (
              <div key={index}>
                <DynamicInput
                  onClick={() => handleRemoveColumn(id)}
                  inputType='text'
                  buttonType='button'
                  value={board.columns[index].title}
                  onChange={(e: FormEvent<HTMLInputElement>) =>
                    handleColumnInputChange(e, index)
                  }
                  isSubmitted={isSubmitted}
                />
              </div>
            )
          })}
        </div>
        <ButtonSecondary
          onClick={handleAddColumn}
          additionalStyling='mb-24px'
          type='button'
        >
          + Add New Column
        </ButtonSecondary>
        <ButtonPrimary type='submit'>Save Changes</ButtonPrimary>
      </form>
    </div>
  )
}
