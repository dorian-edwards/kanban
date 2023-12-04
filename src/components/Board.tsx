import { useBoardDataContext } from '../contexts/StateManagement'
import BoardEmpty from './BoardEmpty'
import Column from './Column'

export default function Board() {
  const { activeBoard } = useBoardDataContext()
  return (
    <>
      {activeBoard && activeBoard.columns.length !== 0 ? (
        <div className='w-full h-full pt-24px px-16px  overflow-x-scroll'>
          <ul className='flex gap-x-24px'>
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
