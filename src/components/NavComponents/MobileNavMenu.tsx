import SidePanelNav from './SidePanelNav'
import ThemeToggle from './ThemeToggle'

export interface MobileNavMenuProps {
  turnLayoverOff: () => void
}

export default function MobileNavMenu({ turnLayoverOff }: MobileNavMenuProps) {
  return (
    <div className='mobile-menu bg-white py-[1.6rem] rounded-md'>
      {' '}
      <SidePanelNav turnLayoverOff={turnLayoverOff} />
      <div className='mt-[1.6rem] w-full max-w-[23.5rem] mx-auto'>
        <ThemeToggle />
      </div>
    </div>
  )
}
