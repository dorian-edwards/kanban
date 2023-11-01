import MainNav from './components/MainNav'
import ShowSidePanel from './components/ShowSidePanel'
import SidePanel from './components/SidePanel'
import { useSidePanel } from './contexts/SidePanelContext'

export default function App() {
  const { sidePanelVisible, toggleSidePanel } = useSidePanel()

  return (
    <>
      <MainNav sidePanelVisible={sidePanelVisible} />
      <div className='flex relative'>
        <SidePanel sidePanelVisible={sidePanelVisible} />
        <main className='flex flex-grow justify-center items-center border-t-[1px] border-lavender bg-lgt-gray dark:bg-very-dark-gray'>
          <ShowSidePanel showSidePanel={toggleSidePanel} />
        </main>
      </div>
    </>
  )
}
