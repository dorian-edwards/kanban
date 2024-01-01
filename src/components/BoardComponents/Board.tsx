import { useBoardDataContext } from '../../contexts/StateManagement'
import BoardEmpty from './BoardEmpty'
import Column from './Column'
import { extractColumns } from '../../utilities/dataUtilities'
import { useOverlayContext } from '../../contexts/OverlayContext'
import BoardForm from './BoardForm'

export default function Board() {
  const { activeBoard, columns } = useBoardDataContext()
  const { setOverlayActive, setModal } = useOverlayContext()

  const activeColumns = extractColumns(activeBoard, columns)

  return (
    <>
      {activeBoard && activeColumns.length !== 0 ? (
        <div className='w-full h-full pt-24px px-16px  overflow-x-scroll snap-x'>
          <ul className='flex gap-x-24px'>
            {activeColumns.map(({ id, title, boardId }, index) => {
              return (
                <li
                  key={id}
                  className='display-block min-w-[28rem] snap-center'
                >
                  <Column
                    id={id}
                    title={title}
                    boardId={boardId}
                    color={index}
                  />
                </li>
              )
            })}
            <li className='add-column snap-end'>
              <button
                className='h-[79.49vh] w-[28rem] text-center display-block mt-[4.2rem] rounded-[.6rem] bg-[#E4EBFA] dark:bg-[rgb(34,35,45)] text-med-gray transition-colors duration-333 hover:text-primary-purple'
                onClick={() => {
                  setModal(<BoardForm editMode={true} />)
                  setOverlayActive(true)
                }}
              >
                {'+ New Column'}
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <BoardEmpty />
      )}
    </>
  )
}

// #2B2C37
