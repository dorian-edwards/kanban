import { useState } from 'react'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import { BoardInfo } from '../../interfaces'
import ButtonSecondary from '../Buttons/ButtonSecondary'
import Label from './FormElements/Label'
import Input from './FormElements/Input'
import DynamicInput from './FormElements/DynamicInput'

/**
 * Returns a randomly generated sequence of 3 capital letters and four numbers for creating ids
 *
 * @returns string
 */
function keyGen(): string {
  let results = ''

  for (let i = 0; i < 3; i++) {
    results += String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }

  return results + Math.floor(Math.random() * 9000 + 1000)
}

export default function CreateBoard() {
  const [board, setBoard] = useState<BoardInfo>({
    id: '',
    title: '',
    columns: [],
  })

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [errorTimeout, setErrorTimeOut] = useState<NodeJS.Timeout | undefined>()

  const handleAddColumn = () => {
    setBoard({
      ...board,
      columns: [...board.columns, { id: keyGen(), title: '' }],
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
    setIsSubmitted(true)
    setErrorTimeOut(
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    )
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
                  onClick={() => {
                    setBoard({
                      ...board,
                      columns: board.columns.filter(
                        (column) => column.id !== id
                      ),
                    })
                  }}
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
