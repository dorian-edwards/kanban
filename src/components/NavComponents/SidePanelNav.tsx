import { useDataContext } from '../../contexts/DataContext'
import { BoardLink } from '../Buttons/BoardLink'
import CreateBoardButton from '../Buttons/CreateBoardButton'

export interface SidePanelNavProps {
  turnLayoverOff?: () => void
}

export default function SidePanelNav({ turnLayoverOff }: SidePanelNavProps) {
  const {
    boardLinks,
    activeBoard: { id: activeId },
    updateActiveBoard,
  } = useDataContext()

  return (
    <div className='side-panel-nav-wrapper'>
      <h2 className='text-xs tracking-wide text-med-gray font-bold mb-[1.2rem] pl-[2.4rem]'>
        {`All Boards (${boardLinks.length})`}
      </h2>
      <nav className='side-panel-nav min-w-[24rem] desktop:min-w-[28rem]'>
        <ul>
          {boardLinks.map((boardLink) => (
            <li key={boardLink.id}>
              <div className='' onClick={turnLayoverOff}>
                <BoardLink
                  id={boardLink.id}
                  title={boardLink.title}
                  active={boardLink.id === activeId}
                  update={updateActiveBoard}
                />
              </div>
            </li>
          ))}
          <li className='text-main-purple'>
            <CreateBoardButton />
          </li>
        </ul>
      </nav>
    </div>
  )
}
