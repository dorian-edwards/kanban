import { useSidePanel } from './contexts/SidePanelContext'
import { useDataContext } from './contexts/DataContext'
import MainNav from './components/NavComponents/MainNav'
import ShowSidePanel from './components/NavComponents/ShowSidePanel'
import SidePanel from './components/NavComponents/SidePanel'
import MobileNav from './components/NavComponents/MobileNav'
import useScreenMonitor from './components/Hooks/useScreenMonitor'
import EmptyBoardScreen from './components/EmptyBoardScreen'
import EmptyWorkspaceScreen from './components/EmptyWorkspaceScreen'

export default function App() {
  const { sidePanelVisible, toggleSidePanel } = useSidePanel()
  const { activeBoard } = useDataContext()
  const mobile = useScreenMonitor()

  return (
    <>
      {mobile ? (
        <MobileNav activeBoard={activeBoard} />
      ) : (
        <MainNav
          sidePanelVisible={sidePanelVisible}
          activeBoard={activeBoard}
        />
      )}

      <section className='primary-display flex tablet:h-[calc(100vh-8rem)] h-[calc(100vh-6.4rem)]'>
        {!mobile && <SidePanel sidePanelVisible={sidePanelVisible} />}
        <main className='board-display flex flex-grow justify-center items-center border-t-[1px] border-lavender bg-lgt-gray dark:bg-very-dark-gray'>
          {!mobile && <ShowSidePanel showSidePanel={toggleSidePanel} />}
          {activeBoard ? <EmptyBoardScreen /> : <EmptyWorkspaceScreen />}
        </main>
      </section>
    </>
  )
}

// Props for both create board and create column??
export interface EmptyScreenProps {
  onClick: () => void | ((id: number) => void)
}
