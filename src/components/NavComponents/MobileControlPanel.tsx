import { MobileControlPanelProps } from '../../interfaces'
import SidePanelNav from './SidePanelNav'
import ThemeToggle from './ThemeToggle'

export default function MobileControlPanel({
  turnOverlayOff,
}: MobileControlPanelProps) {
  return (
    <div className='mobile-control bg-white py-16px rounded-md'>
      {' '}
      <SidePanelNav turnOverlayOff={turnOverlayOff} />
      <div className='mt-16px w-full max-w-[23.5rem] mx-auto'>
        <ThemeToggle />
      </div>
    </div>
  )
}
