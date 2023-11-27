import { FormEvent, useState } from 'react'
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
    title: '',
    columns: [],
  })

  return (
    <div className='bg-white p-[2.4rem] rounded-sm mx-[16px]'>
      <form onSubmit={() => {}}>
        <h2 className='mb-[2.4rem] font-bold text-[1.8rem]'>Add New Board</h2>
        <div className='mb-[2.4rem]'>
          <Label htmlFor='board-name'>Board Name</Label>
          <Input
            type='text'
            id='board-name'
            value={board.title}
            onChange={() => {}}
          />
        </div>
        <div className='mb-[1.2rem]'>
          <Label>Board Columns</Label>
          {board.columns.map(({ id, title }, index) => {
            return (
              <div key={index}>
                <DynamicInput
                  onClick={() => {}}
                  inputType='text'
                  buttonType='button'
                  value={board.columns[index].title}
                  onChange={() => {}}
                />
              </div>
            )
          })}
        </div>
        <ButtonSecondary
          onClick={() => {}}
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
