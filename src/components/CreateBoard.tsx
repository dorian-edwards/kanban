import { useState } from 'react'
import ButtonPrimary from './Buttons/ButtonPrimary'
import CrossIcon from './icons/CrossIcon'
import { BoardInfo } from '../interfaces'
import ButtonSecondary from './Buttons/ButtonSecondary'

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

  return (
    <div className='bg-white p-[2.4rem] rounded-sm mx-[16px]'>
      <form>
        <h2 className='mb-[2.4rem] font-bold text-[1.8rem]'>Add New Board</h2>
        <div className='mb-[2.4rem]'>
          <Label>Board Name</Label>
          <input
            type='text'
            id='board-name'
            className='border border-cool-gray rounded-sm outline-none w-full pl-[1.6rem] py-[0.8rem]'
          />
        </div>
        <div className='mb-[1.2rem]'>
          <Label>Board Columns</Label>
          {board.columns.map(({ id, title }, index) => {
            return (
              <div key={index}>
                <div className='flex gap-[1.6rem] mb-[1.2rem]'>
                  <input
                    type='text'
                    className='border border-cool-gray rounded-sm outline-none w-full pl-[1.6rem] py-[0.8rem]'
                  />
                  <button onClick={() => handleDeleteColumn(id)} type='button'>
                    <CrossIcon />
                  </button>
                </div>
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
        <ButtonPrimary type='button'>Create New Board</ButtonPrimary>
      </form>
    </div>
  )
}

export function Label({ children }: LabelProps) {
  return (
    <label
      className='mb-[0.8rem] block font-bold text-[1.2rem] text-med-gray'
      htmlFor='board-name'
    >
      {children}
    </label>
  )
}

export interface LabelProps {
  children: string | JSX.Element
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
