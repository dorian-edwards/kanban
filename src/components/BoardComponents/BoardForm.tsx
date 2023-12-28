import { FormEvent, useState } from 'react'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import ButtonSecondary from '../Buttons/ButtonSecondary'
import keyGen from '../../utilities/keyGen'
import {
  useBoardDataContext,
  useBoardDispatchContext,
} from '../../contexts/StateManagement'
import { useOverlayContext } from '../../contexts/OverlayContext'
import { BoardFormInterface } from '../../interfaces/DataInterfaces'
import DynamicInput from '../FormElements/DynamicInput'
import Input from '../FormElements/Input'
import Label from '../FormElements/Label'
import {
  createBoard,
  extractColumns,
  updateBoard,
} from '../../utilities/dataUtilities'

export default function BoardTest({ editMode }: { editMode: boolean }) {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const { setOverlayActive } = useOverlayContext()
  const state = useBoardDataContext()
  const dispatch = useBoardDispatchContext()
  const activeBoard = state.boards[state.activeBoard]
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errorTimeout, setErrorTimeOut] = useState<NodeJS.Timeout | undefined>()

  const [board, setBoard] = useState<BoardFormInterface>({
    id: editMode ? activeBoard.id : '',
    title: editMode ? activeBoard.title : '',
    columns: editMode
      ? extractColumns(activeBoard.id, state.columns).map(({ id, title }) => ({
          id,
          title,
        }))
      : [],
  })

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

  const isFormValid = (): boolean => {
    let result = true
    if (board.title.trim() === '') result = false

    for (let column of board.columns) {
      if (column.title.trim() === '') result = false
    }

    return result
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

    if (editMode) {
      updateBoard(
        dispatch,
        board,
        extractColumns(activeBoard.id, state.columns)
      )
    } else {
      createBoard(dispatch, board)
    }

    setOverlayActive(false)
  }

  return (
    <div className='bg-white dark:bg-dark-gray p-24px rounded-sm mx-[16px]'>
      <form onSubmit={handleSubmit}>
        <h2 className='mb-24px font-bold text-18px dark:text-white'>
          {editMode ? 'Edit Board' : 'Add New Board'}
        </h2>
        <div className='board-title-input-wrapper mb-24px'>
          <Label htmlFor='board-name'>{editMode ? 'Name' : 'Board Name'}</Label>
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
        <div className='board-columns-input-wrapper mb-12px'>
          <Label>{editMode ? 'Columns' : 'Board Columns'}</Label>
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
        <ButtonPrimary type='submit'>
          {editMode ? 'Save Changes' : 'Create New Board'}
        </ButtonPrimary>
      </form>
    </div>
  )
}
