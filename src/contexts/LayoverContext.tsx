import { useContext, createContext, useState } from 'react'

const LayoverContext = createContext<{
  layoverActive: boolean
  setLayoverActive: (b: boolean) => void
} | null>(null)

export default function LayoverContextProvider({
  children,
}: {
  children: JSX.Element
}) {
  const [layoverActive, setLayoverActive] = useState<boolean>(false)

  return (
    <LayoverContext.Provider value={{ layoverActive, setLayoverActive }}>
      {children}
    </LayoverContext.Provider>
  )
}

export function useLayoverContext() {
  const context = useContext(LayoverContext)
  if (!context)
    throw new Error(
      'Layover context must be used within Layover context provider'
    )

  return context
}
