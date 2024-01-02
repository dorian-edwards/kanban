import DarkTheme from '../icons/DarkTheme'
import LightTheme from '../icons/LightTheme'
import DarkModeToggle from './DarkModeToggle'

export default function ThemeToggle() {
  return (
    <div className='theme-toggle bg-lgt-gray dark:bg-very-dark-gray h-[4.8rem] flex items-center justify-center w-[23.5rem] desktop:w-[25.1rem] transition-colors duration-333'>
      <div className='flex justify-between w-1/2'>
        <LightTheme />
        <DarkModeToggle />
        <DarkTheme />
      </div>
    </div>
  )
}
