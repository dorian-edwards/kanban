import { useBoardDataContext } from '../../contexts/StateManagement'
import { SidePanelNavProps } from '../../interfaces/PropInterfaces'
import { BoardLink } from '../Buttons/BoardLink'
import CreateBoardButton from '../Buttons/CreateBoardButton'

export default function SidePanelNav({ turnOverlayOff }: SidePanelNavProps) {
  const { activeBoard, boards } = useBoardDataContext()

  const boardLinks = Object.values(boards).map((board) => {
    return { id: board.id, title: board.title }
  })

  return (
    <div className='side-panel-nav-wrapper'>
      <h2 className='text-xs tracking-wide text-med-gray font-bold mb-12px pl-24px'>
        {`All Boards (${boardLinks.length})`}
      </h2>
      <nav className='side-panel-nav min-w-[24rem] desktop:min-w-[28rem]'>
        <ul>
          {activeBoard &&
            boardLinks.map((boardLink) => (
              <li key={boardLink.id}>
                <BoardLink
                  id={boardLink.id}
                  title={boardLink.title}
                  active={boardLink.id === activeBoard}
                />
              </li>
            ))}
          <li className='text-primary-purple'>
            <CreateBoardButton />
          </li>
        </ul>
      </nav>
    </div>
  )
}
