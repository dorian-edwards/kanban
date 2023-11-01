import NavDark from './icons/NavDark'

export default function MainNav({
  sidePanelVisible,
}: {
  sidePanelVisible: boolean
}) {
  return (
    <nav className='main-nav flex bg-white'>
      <div
        className={`logo-wrapper py-[2.8rem] pl-[2.6rem] border-r-[1px] border-lavender transition-[padding] duration-1000 ${
          sidePanelVisible ? 'pr-[8rem]' : 'pr-[2.4rem]'
        }`}
      >
        <NavDark />
      </div>
      <h1 className='py-[2.8rem] pl-[2.5rem] font-sans font-bold text-xl'>
        Kanban Board
      </h1>
    </nav>
  )
}
