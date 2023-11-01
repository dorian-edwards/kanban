import DarkModeToggle from './DarkModeToggle'
import HideSidePanel from './HideSidePanel'
import DarkTheme from '../icons/DarkTheme'
import LightTheme from '../icons/LightTheme'

export default function ControlPanel() {
  return (
    <div className='side-panel-control ml-[2rem]'>
      <div className='theme-toggle mb-[3rem] bg-lavender h-[4.8rem] flex items-center justify-center w-[21.33rem] desktop:w-[25.1rem]'>
        <div className='flex justify-between w-1/2'>
          <LightTheme />
          <DarkModeToggle />
          <DarkTheme />
        </div>
      </div>
      <HideSidePanel />
    </div>
  )
}
