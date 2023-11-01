import { createContext, useContext } from 'react'

type ThemeContextInterface = () => void

const ThemeContext = createContext<ThemeContextInterface | null>(null)

export default function ThemeContextProvider({
  children,
}: {
  children: JSX.Element
}) {
  const toggleDarkMode = (): void => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  return (
    <ThemeContext.Provider value={toggleDarkMode}>
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
