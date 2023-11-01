import { useTheme } from '../contexts/ThemeContext'

export default function DarkModeToggle() {
  const toggleDarkMode = useTheme()

  function handleClick() {
    if (toggleDarkMode) toggleDarkMode()
  }

  return (
    <div className='darkmode-toggle'>
      <button
        className='toggle w-[3.2rem] bg-main-purple h-[1.6rem] rounded-xl flex items-center'
        onClick={handleClick}
      >
        <div className='toggle-button w-[1.2rem] h-[1.2rem] bg-white rounded-xl transition-[left] duration-1000 relative left-[2px]  dark:left-[18px]' />
      </button>
    </div>
  )
}
