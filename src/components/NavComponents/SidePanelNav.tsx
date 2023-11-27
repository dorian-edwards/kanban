import { useBoardDataContext } from '../../contexts/StateManagement'
import { SidePanelNavProps } from '../../interfaces'
import { BoardLink } from '../Buttons/BoardLink'
import CreateBoardButton from '../Buttons/CreateBoardButton'

export default function SidePanelNav({ turnOverlayOff }: SidePanelNavProps) {
  const { activeBoard, boards } = useBoardDataContext()

  const boardLinks = boards.map((board) => {
    return { id: board.id, title: board.title }
  })

  return (
    <div className='side-panel-nav-wrapper'>
      <h2 className='text-xs tracking-wide text-med-gray font-bold mb-[1.2rem] pl-[2.4rem]'>
        {`All Boards (${boardLinks.length})`}
      </h2>
      <nav className='side-panel-nav min-w-[24rem] desktop:min-w-[28rem]'>
        <ul>
          {activeBoard &&
            boardLinks.map((boardLink) => (
              <li key={boardLink.id}>
                <div className='' onClick={turnOverlayOff}>
                  <BoardLink
                    id={boardLink.id}
                    title={boardLink.title}
                    active={boardLink.id === activeBoard.id}
                  />
                </div>
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
