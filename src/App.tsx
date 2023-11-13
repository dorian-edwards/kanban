import { useEffect, useState } from 'react'
import { useSidePanel } from './contexts/SidePanelContext'
import { useDataContext } from './contexts/DataContext'
import MainNav from './components/NavComponents/MainNav'
import ShowSidePanel from './components/NavComponents/ShowSidePanel'
import SidePanel from './components/NavComponents/SidePanel'
import MobileNav from './components/NavComponents/MobileNav'

export default function App() {
  const [mobile, setMobile] = useState<boolean>(window.innerWidth < 768)
  const { sidePanelVisible, toggleSidePanel } = useSidePanel()
  const { activeBoard } = useDataContext()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) return setMobile(true)

      setMobile(false)
    }
    window.addEventListener('resize', handleResize)
  }, [])

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

      <section className='primary-display flex relative tablet:h-[calc(100vh-8rem)] h-[calc(100vh-6.4rem)]'>
        {!mobile && <SidePanel sidePanelVisible={sidePanelVisible} />}
        <main className='board-display flex flex-grow justify-center items-center border-t-[1px] border-lavender bg-lgt-gray dark:bg-very-dark-gray'>
          {!mobile && <ShowSidePanel showSidePanel={toggleSidePanel} />}
        </main>
      </section>
    </>
  )
}
