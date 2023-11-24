import { useState } from 'react'
import ButtonPrimary from './Buttons/ButtonPrimary'
import CrossIcon from './icons/CrossIcon'

export interface BoardInfo {
  title: string
  columns: ColumnInfo[]
}

export interface ColumnInfo {
  id: string
  title: string
}

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
          <label
            className='mb-[0.8rem] block font-bold text-[1.2rem] text-med-gray'
            htmlFor='board-name'
          >
            Board Name
          </label>
          <input
            type='text'
            id='board-name'
            className='border border-cool-gray rounded-sm outline-none w-full pl-[1.6rem] py-[0.8rem]'
          />
        </div>
        <div className='mb-[1.2rem]'>
          <label className='mb-[0.8rem] block font-bold text-[1.2rem] text-med-gray'>
            Board Columns
          </label>
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
        <ButtonPrimary
          text={'+ Add New Column'}
          onClick={handleAddColumn}
          additionalStyling='w-full mb-[2.4rem] bg-main-purple-opaque !text-main-purple'
          type='button'
        />
        <ButtonPrimary text='Create New Board' type='button' />
      </form>
    </div>
  )
}

function keyGen(): string {
  let results = ''

  for (let i = 0; i < 3; i++) {
    results += String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }

  return results + Math.floor(Math.random() * 9000 + 1000)
}
