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
import Board from './components/Board'

export default function App() {
  const { sidePanelVisible, toggleSidePanel } = useSidePanel()
  const mobile = useScreenMonitor()
  const { overlayActive, modal, setOverlayActive } = useOverlayContext()
  const { activeBoard } = useBoardDataContext()

  return (
    <>
      {overlayActive ? (
        <Overlay turnOverlayOff={() => setOverlayActive(false)}>
          {modal}
        </Overlay>
      ) : (
        <></>
      )}
      {mobile ? <MobileNav /> : <MainNav sidePanelVisible={sidePanelVisible} />}

      <section className='primary-display flex tablet:h-[calc(100vh-8rem)] h-[calc(100vh-6.4rem)]'>
        {!mobile && <SidePanel sidePanelVisible={sidePanelVisible} />}
        <main className='board-display flex flex-grow justify-center items-center border-t-[1px] border-lavender bg-lgt-gray dark:bg-very-dark-gray overflow-x-hidden'>
          {!mobile && <ShowSidePanel showSidePanel={toggleSidePanel} />}
          {activeBoard ? <Board /> : <EmptyWorkspaceScreen />}
        </main>
      </section>
    </>
  )
}
