import { useBoardDataContext } from '../../contexts/StateManagement'
import { EditType } from '../../interfaces/DataInterfaces'
import { MainNavProps } from '../../interfaces/PropInterfaces'
import { extractColumns } from '../../utilities/dataUtilities'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import Edit from '../Edit'
import NavDark from '../icons/NavDark'

export default function MainNav({ sidePanelVisible }: MainNavProps) {
  const { activeBoard, boards, columns } = useBoardDataContext()
  const activeColumns = extractColumns(activeBoard, columns)

  return (
    <nav className='main-nav flex justify-between bg-white'>
      <div className='flex'>
        <div
          className={`logo-wrapper py-[2.5rem] pl-[2.6rem] border-r-[1px] border-lavender transition-[padding] duration-1000 ${
            sidePanelVisible ? 'pr-[8rem] desktop:pr-[12rem]' : 'pr-24px'
          }`}
        >
          <NavDark />
        </div>
        {activeBoard ? (
          <h1 className='py-[2.5rem] pl-[2.5rem] font-sans font-bold text-xl'>
            {boards[activeBoard].title}
          </h1>
        ) : null}
      </div>
      <div className='main-nav-options flex items-center pr-[2.5rem] gap-x-24px relative'>
        <ButtonPrimary
          disabled={!(activeBoard && activeColumns.length !== 0) || true}
          additionalStyling='px-[2.5rem] text-med !py-[1.4rem]'
        >
          {'+ Add New Task'}
        </ButtonPrimary>

        <Edit type={EditType.board} disabled={!activeBoard} />
      </div>
    </nav>
  )
}
