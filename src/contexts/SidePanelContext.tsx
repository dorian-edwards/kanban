import { createContext, useContext, useState } from 'react'

interface SidePanelContextInterface {
  sidePanelVisible: boolean
  toggleSidePanel: () => void
}

const SidePanelContext = createContext<SidePanelContextInterface | null>(null)

export default function SidePanelProvider({
  children,
}: {
  children: JSX.Element
}) {
  const [sidePanelVisible, setSidePanelVisible] = useState<boolean>(true)

  function toggleSidePanel() {
    setSidePanelVisible(!sidePanelVisible)
  }

  return (
    <SidePanelContext.Provider value={{ sidePanelVisible, toggleSidePanel }}>
      {children}
    </SidePanelContext.Provider>
  )
}

export function useSidePanel() {
  const context = useContext(SidePanelContext)
  if (!context)
    throw new Error('SidePanel context must  be used within SidePanel Provider')

  return context
}
