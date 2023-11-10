import BoardIcon from '../icons/BoardIcon'
import { useDataContext } from '../../contexts/DataContext'

export interface BoardLinkprops {
  id: number
  title: string
  active: boolean
  update: (n: number) => void
}

export function BoardLink({ id, title, active, update }: BoardLinkprops) {
  return (
    <button
      className={`link-wrapper w-full ${
        active ? 'bg-main-purple text-white' : 'text-med-gray hover:bg-lavender'
      }  pl-[2.4rem] rounded-r-xl py-[1.2rem]`}
      onClick={() => update(id)}
    >
      <BoardIcon additionalStyling='mr-[1.2rem]' />
      {title}
    </button>
  )
}

export default function SidePanelNav() {
  const {
    boardLinks,
    activeBoard: { id: activeId },
    updateActiveBoard,
  } = useDataContext()

  return (
    <div className='side-panel-nav-wrapper'>
      <h2 className='text-xs tracking-wide text-med-gray font-bold mb-[1.2rem] pl-[2.4rem]'>
        {'All Boards (3)'}
      </h2>
      <nav className='side-panel-nav min-w-[24rem] desktop:min-w-[28rem]'>
        <ul>
          {boardLinks.map((boardLink) => (
            <li key={boardLink.id}>
              <BoardLink
                id={boardLink.id}
                title={boardLink.title}
                active={boardLink.id === activeId}
                update={updateActiveBoard}
              />
            </li>
          ))}
          <li className='text-main-purple'>
            <button className='link-wrapper pl-[2.4rem] rounded-r-xl py-[1.2rem] flex items-center'>
              <BoardIcon additionalStyling='mr-[1.2rem]' />
              +&nbsp;&nbsp;Create New Board
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
