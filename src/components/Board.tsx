import { useBoardDataContext } from '../contexts/StateManagement'
import BoardEmpty from './BoardEmpty'
import Column from './Column'

export default function Board() {
  const { activeBoard } = useBoardDataContext()
  return (
    <>
      {activeBoard && activeBoard.columns.length !== 0 ? (
        <div className='w-full h-full pt-[2.4rem] px-[1.6rem]  overflow-x-scroll'>
          <ul className='flex gap-x-[2.4rem]'>
            {activeBoard.columns.map(({ id, title, tasks }) => {
              return <Column key={id} id={id} title={title} tasks={tasks} />
            })}
          </ul>
        </div>
      ) : (
        <BoardEmpty />
      )}
    </>
  )
}
