import { useContext, createContext, useState } from 'react'

const OverlayContext = createContext<{
  overlayActive: boolean
  setOverlayActive: React.Dispatch<React.SetStateAction<boolean>>
  modal: JSX.Element
  setModal: React.Dispatch<React.SetStateAction<JSX.Element>>
  fullScreen: boolean
  setFullScreen: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

export default function OverlayContextProvider({
  children,
}: {
  children: JSX.Element
}) {
  const [overlayActive, setOverlayActive] = useState<boolean>(false)
  const [modal, setModal] = useState<JSX.Element>(<></>)
  const [fullScreen, setFullScreen] = useState<boolean>(true)

  return (
    <OverlayContext.Provider
      value={{
        overlayActive,
        setOverlayActive,
        modal,
        setModal,
        fullScreen,
        setFullScreen,
      }}
    >
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
