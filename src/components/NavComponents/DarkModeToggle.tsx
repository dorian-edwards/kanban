import { useTheme } from '../../contexts/ThemeContext'

export default function DarkModeToggle() {
  const { toggleDarkMode } = useTheme()

  return (
    <div className='darkmode-toggle'>
      <button
        className='toggle w-32px bg-primary-purple h-16px rounded-xl flex items-center'
        onClick={toggleDarkMode}
      >
        <div className='toggle-button w-12px h-12px bg-white rounded-xl transition-[left] duration-333 relative left-[2px]  dark:left-[18px]' />
      </button>
    </div>
  )
}
