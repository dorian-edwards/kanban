import DarkModeToggle from './DarkModeToggle'
import HideSidePanel from './HideSidePanel'
import DarkTheme from '../icons/DarkTheme'
import LightTheme from '../icons/LightTheme'

export default function ControlPanel() {
  return (
    <div className='side-panel-control'>
      <div className='theme-toggle mb-[0.8rem] ml-[2rem] bg-lgt-gray h-[4.8rem] flex items-center justify-center w-[21.33rem] desktop:w-[25.1rem]'>
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
