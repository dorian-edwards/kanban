import { useOverlayContext } from '../../contexts/OverlayContext'
import { useBoardDataContext } from '../../contexts/StateManagement'
import { useTheme } from '../../contexts/ThemeContext'
import { EditType } from '../../interfaces/DataInterfaces'
import { MainNavProps } from '../../interfaces/PropInterfaces'
import { extractColumns } from '../../utilities/dataUtilities'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import Edit from '../Edit'
import TaskForm from '../TaskComponents/TaskForm'
import NavDark from '../icons/NavDark'
import NavLight from '../icons/NavLight'

export default function MainNav({ sidePanelVisible }: MainNavProps) {
  const { activeBoard, boards, columns } = useBoardDataContext()
  const activeColumns = extractColumns(activeBoard, columns)
  const { setModal, setOverlayActive } = useOverlayContext()
  const { darkMode } = useTheme()

  return (
    <nav className='main-nav flex justify-between bg-white dark:bg-dark-gray transition-colors duration-333'>
      <div className='flex'>
        <div
          className={`logo-wrapper py-[2.5rem] pl-[2.6rem] border-r-[1px] border-lavender dark:border-lines-dark transition-all duration-333 ${
            sidePanelVisible ? 'pr-[8rem] desktop:pr-[12rem]' : 'pr-24px'
          }`}
        >
          {darkMode ? <NavLight /> : <NavDark />}
        </div>
        {activeBoard ? (
          <h1 className='py-[2.5rem] pl-[2.5rem] font-sans font-bold text-xl dark:text-white transition-colors duration-333'>
            {boards[activeBoard].title}
          </h1>
        ) : null}
      </div>
      <div className='main-nav-options flex items-center pr-[2.5rem] gap-x-24px relative'>
        <ButtonPrimary
          disabled={!(activeBoard && activeColumns.length !== 0)}
          additionalStyling='px-[2.5rem] text-med !py-[1.4rem]'
          onClick={() => {
            setModal(<TaskForm />)
            setOverlayActive(true)
          }}
        >
          {'+ Add New Task'}
        </ButtonPrimary>

        <Edit type={EditType.board} disabled={!activeBoard} />
      </div>
    </nav>
  )
}
