import { FormEvent, useState } from 'react'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import { BoardInfo } from '../../interfaces'
import ButtonSecondary from '../Buttons/ButtonSecondary'
import Label from './FormElements/Label'
import Input from './FormElements/Input'
import DynamicInput from './FormElements/DynamicInput'

export default function CreateBoard() {
  const [board, setBoard] = useState<BoardInfo>({
    title: '',
    columns: [],
  })

  const handleAddColumn = () => {
    setBoard({
      ...board,
      columns: [...board.columns, { id: keyGen(), title: '' }],
    })
  }

  const handleDeleteColumn = (targetId: string) => {
    setBoard({
      ...board,
      columns: board.columns.filter(({ id }) => id !== targetId),
    })
  }

  const handleColumnInput = (
    e: React.FormEvent<HTMLInputElement>,
    index: number
  ) => {
    const columnCopy = [...board.columns]
    columnCopy[index].title = e.currentTarget.value

    setBoard({ ...board, columns: [...columnCopy] })
  }

  const handleTitleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setBoard({ ...board, title: e.currentTarget.value })
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(board)
  }

  return (
    <div className='bg-white p-[2.4rem] rounded-sm mx-[16px]'>
      <form onSubmit={handleFormSubmit}>
        <h2 className='mb-[2.4rem] font-bold text-[1.8rem]'>Add New Board</h2>
        <div className='mb-[2.4rem]'>
          <Label htmlFor='board-name'>Board Name</Label>
          <Input
            type='text'
            id='board-name'
            value={board.title}
            onChange={handleTitleInput}
          />
        </div>
        <div className='mb-[1.2rem]'>
          <Label>Board Columns</Label>
          {board.columns.map(({ id, title }, index) => {
            return (
              <div key={index}>
                <DynamicInput
                  onClick={() => handleDeleteColumn(id)}
                  inputType='text'
                  buttonType='button'
                  value={board.columns[index].title}
                  onChange={(e) => handleColumnInput(e, index)}
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
