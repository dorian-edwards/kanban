import { MobileControlPanelProps } from '../../interfaces/PropInterfaces'
import SidePanelNav from './SidePanelNav'
import ThemeToggle from './ThemeToggle'

export default function MobileControlPanel({
  turnOverlayOff,
}: MobileControlPanelProps) {
  return (
    <div className='mobile-control max-w-[26.4rem] mx-auto bg-white py-16px rounded-md dark:bg-dark-gray transition-colors duration-500'>
      {' '}
      <SidePanelNav turnOverlayOff={turnOverlayOff} />
      <div className='mt-16px w-full max-w-[23.5rem] mx-auto'>
        <ThemeToggle />
      </div>
    </div>
  )
}
