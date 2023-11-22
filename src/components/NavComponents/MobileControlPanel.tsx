import { MobileControlPanelProps } from '../../interfaces'
import SidePanelNav from './SidePanelNav'
import ThemeToggle from './ThemeToggle'

export default function MobileControlPanel({
  turnLayoverOff,
}: MobileControlPanelProps) {
  return (
    <div className='mobile-control bg-white py-[1.6rem] rounded-md'>
      {' '}
      <SidePanelNav turnLayoverOff={turnLayoverOff} />
      <div className='mt-[1.6rem] w-full max-w-[23.5rem] mx-auto'>
        <ThemeToggle />
      </div>
    </div>
  )
}
