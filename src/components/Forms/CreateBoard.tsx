import { useState } from 'react'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import { BoardInfo } from '../../interfaces'
import ButtonSecondary from '../Buttons/ButtonSecondary'
import Label from './FormElements/Label'
import Input from './FormElements/Input'
import DynamicInput from './FormElements/DynamicInput'
import keyGen from '../../utilities/KeyGen'
import { useBoardDispatchContext } from '../../contexts/StateManagement'
import { useOverlayContext } from '../../contexts/OverlayContext'

export default function CreateBoard() {
  const [board, setBoard] = useState<BoardInfo>({
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
      columns: [...board.columns, { id: keyGen(), title: '' }],
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

    dispatch({
      type: 'CREATE_BOARD',
      payload: { ...board, id: keyGen() },
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
    <div className='bg-white p-[2.4rem] rounded-sm mx-[16px]'>
      <form onSubmit={handleSubmit}>
        <h2 className='mb-[2.4rem] font-bold text-[1.8rem]'>Add New Board</h2>
        <div className='mb-[2.4rem]'>
          <Label htmlFor='board-name'>Board Name</Label>
          <Input
            type='text'
            id='board-name'
            value={board.title}
            onChange={(e) => {
              setIsSubmitted(false)
              setBoard({ ...board, title: e.currentTarget.value })
            }}
            isSubmitted={isSubmitted}
          />
        </div>
        <div className='mb-[1.2rem]'>
          <Label>Board Columns</Label>
          {board.columns.map(({ id, title }, index) => {
            return (
              <div key={index}>
                <DynamicInput
                  onClick={() => handleRemoveColumn(id)}
                  inputType='text'
                  buttonType='button'
                  value={board.columns[index].title}
                  onChange={(e) => handleColumnInputChange(e, index)}
                  isSubmitted={isSubmitted}
                />
              </div>
            )
          })}
        </div>
        <ButtonSecondary
          onClick={handleAddColumn}
          additionalStyling='mb-[2.4rem]'
          type='button'
        >
          + Add New Column
        </ButtonSecondary>
        <ButtonPrimary type='submit'>Create New Board</ButtonPrimary>
      </form>
    </div>
  )
}