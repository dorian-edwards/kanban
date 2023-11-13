import HideSidePanel from './HideSidePanel'
import ThemeToggle from './ThemeToggle'

export default function ControlPanel() {
  return (
    <div className='side-panel-control'>
      <div className='theme-wrapper w-[90%] max-w-[25.1rem] mx-auto mb-2'>
        {' '}
        <ThemeToggle />
      </div>

      <HideSidePanel />
    </div>
  )
}
