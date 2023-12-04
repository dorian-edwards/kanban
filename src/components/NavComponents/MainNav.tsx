import { MainNavProps } from '../../interfaces'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import { NavMenu } from '../Buttons/NavMenu'
import NavDark from '../icons/NavDark'

export default function MainNav({
  sidePanelVisible,
  activeBoard,
}: MainNavProps) {
  return (
    <nav className='main-nav flex justify-between bg-white'>
      <div className='flex'>
        <div
          className={`logo-wrapper py-[2.5rem] pl-[2.6rem] border-r-[1px] border-lavender transition-[padding] duration-1000 ${
            sidePanelVisible ? 'pr-[8rem] desktop:pr-[12.05rem]' : 'pr-24px'
          }`}
        >
          <NavDark />
        </div>
        {activeBoard ? (
          <h1 className='py-[2.5rem] pl-[2.5rem] font-sans font-bold text-xl'>
            {activeBoard.title}
          </h1>
        ) : null}
      </div>
      <div className='main-nav-options flex items-center pr-[2.5rem] gap-x-24px'>
        <ButtonPrimary
          disabled={!(activeBoard && activeBoard.columns.length !== 0) || true}
          additionalStyling='px-[2.5rem]'
        >
          {'+ Add New Task'}
        </ButtonPrimary>
        <NavMenu />
      </div>
    </nav>
  )
}
