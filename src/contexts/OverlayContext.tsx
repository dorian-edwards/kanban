import { useContext, createContext, useState } from 'react'

const OverlayContext = createContext<{
  overlayActive: boolean
  setOverlayActive: (b: boolean) => void
} | null>(null)

export default function OverlayContextProvider({
  children,
}: {
  children: JSX.Element
}) {
  const [overlayActive, setOverlayActive] = useState<boolean>(false)

  return (
    <OverlayContext.Provider value={{ overlayActive, setOverlayActive }}>
      {children}
    </OverlayContext.Provider>
  )
}

export function useOverlayContext() {
  const context = useContext(OverlayContext)
  if (!context)
    throw new Error(
      'Overlay context must be used within Overlay context provider'
    )

  return context
}
