import { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextInterface {
  darkMode: boolean
  toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextInterface | null>(null)

export default function ThemeContextProvider({
  children,
}: {
  children: JSX.Element
}) {
  const darkTheme = window.matchMedia('(prefers-color-scheme: dark)')
  const [darkMode, setDarkMode] = useState<boolean>(darkTheme.matches)

  const toggleDarkMode = (): void => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    }
  }

  useEffect(() => {
    if (darkTheme.matches) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkTheme.matches])

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context)
    throw new Error('Theme context must be used within Theme Provider')

  return context
}
