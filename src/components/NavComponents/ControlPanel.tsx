import HideSidePanel from './HideSidePanel'
import ThemeToggle from './ThemeToggle'

export default function ControlPanel() {
  return (
    <div className='side-panel-control'>
      <div className='theme-wrapper w-[90%] max-w-[25.1rem] mx-auto tablet:ml-[1.295rem] desktop:ml-[2.4183rem] mb-2'>
        {' '}
        <ThemeToggle />
      </div>

      <HideSidePanel />
    </div>
  )
}
