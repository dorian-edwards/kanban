import HideSidePanel from './HideSidePanel'
import ThemeToggle from './ThemeToggle'

export default function ControlPanel() {
  return (
    <div className='side-panel-control'>
      <div className='theme-wrapper w-[90%] max-w-[25.1rem] mx-auto'>
        {' '}
        <ThemeToggle />
      </div>

      <HideSidePanel />
    </div>
  )
}
