import { FormEvent, useState } from 'react'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import ButtonSecondary from '../Buttons/ButtonSecondary'
import Label from '../FormElements/Label'
import Input from '../FormElements/Input'
import DynamicInput from '../FormElements/DynamicInput'
import keyGen from '../../utilities/keyGen'
import { useBoardDispatchContext } from '../../contexts/StateManagement'
import { useOverlayContext } from '../../contexts/OverlayContext'
import { DATA_ACTION } from '../../interfaces/DataInterfaces'

export default function CreateTask() {
  const [board, setBoard] = useState<{
    id: string
    title: string
    columns: { id: string; title: string }[]
  }>({
    id: '',
    title: '',
    columns: [],
  })
  const dispatch = useBoardDispatchContext()
  const { setOverlayActive } = useOverlayContext()

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
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
    n: number
  ) => {
    setIsSubmitted(false)
    const copy = { ...board, columns: [...board.columns] }
    copy.columns[n].title = e.currentTarget.value
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

    const boardId = keyGen('B')

    dispatch({
      type: DATA_ACTION.CREATE_BOARD,
      payload: { id: boardId, title: board.title },
    })

    for (let column of board.columns) {
      const { id, title } = column
      dispatch({
        type: DATA_ACTION.CREATE_COLUMN,
        payload: { id, title, boardId },
      })
    }

    dispatch({
      type: DATA_ACTION.SET_ACTIVE_BOARD,
      payload: { id: boardId },
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
        <h2 className='mb-24px font-bold text-18px'>Add New Board</h2>
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
        <ButtonPrimary type='submit'>Create New Board</ButtonPrimary>
      </form>
    </div>
  )
}
