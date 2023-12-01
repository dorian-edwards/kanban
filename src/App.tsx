import { useSidePanel } from './contexts/SidePanelContext'
import MainNav from './components/NavComponents/MainNav'
import ShowSidePanel from './components/NavComponents/ShowSidePanel'
import SidePanel from './components/NavComponents/SidePanel'
import MobileNav from './components/NavComponents/MobileNav'
import useScreenMonitor from './components/Hooks/useScreenMonitor'
import EmptyBoardScreen from './components/EmptyBoardScreen'
import EmptyWorkspaceScreen from './components/EmptyWorkspaceScreen'
import { useBoardDataContext } from './contexts/StateManagement'
import { useOverlayContext } from './contexts/OverlayContext'
import Overlay from './components/Overlay'

export default function App() {
  const { sidePanelVisible, toggleSidePanel } = useSidePanel()
  const { activeBoard } = useBoardDataContext()
  const mobile = useScreenMonitor()
  const { overlayActive, modal, setOverlayActive } = useOverlayContext()

  return (
    <>
      {overlayActive ? (
        <Overlay turnOverlayOff={() => setOverlayActive(false)}>
          {modal}
        </Overlay>
      ) : (
        <></>
      )}
      {mobile ? (
        <MobileNav />
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
