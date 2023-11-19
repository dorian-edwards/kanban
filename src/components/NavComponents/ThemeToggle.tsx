import DarkTheme from '../icons/DarkTheme'
import LightTheme from '../icons/LightTheme'
import DarkModeToggle from './DarkModeToggle'

export default function ThemeToggle() {
  return (
    <div className='theme-toggle bg-lgt-gray h-[4.8rem] flex items-center justify-center w-full'>
      <div className='flex justify-between w-1/2'>
        <LightTheme />
        <DarkModeToggle />
        <DarkTheme />
      </div>
    </div>
  )
}