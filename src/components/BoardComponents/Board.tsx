import { useBoardDataContext } from '../../contexts/StateManagement'
import BoardEmpty from './BoardEmpty'
import Column from './Column'
import { extractColumns } from '../../utilities/dataUtilities'

export default function Board() {
  const { activeBoard, columns } = useBoardDataContext()

  const activeColumns = extractColumns(activeBoard, columns)

  return (
    <>
      {activeBoard && activeColumns.length !== 0 ? (
        <div className='w-full h-full pt-24px px-16px  overflow-x-scroll'>
          <ul className='flex gap-x-24px'>
            {activeColumns.map(({ id, title, boardId }) => {
              return <Column key={id} id={id} title={title} boardId={boardId} />
            })}
          </ul>
        </div>
      ) : (
        <BoardEmpty />
      )}
    </>
  )
}
