import { useEffect, useState } from 'react'
import MainNav from './components/NavComponents/MainNav'
import ShowSidePanel from './components/NavComponents/ShowSidePanel'
import SidePanel from './components/NavComponents/SidePanel'
import { useSidePanel } from './contexts/SidePanelContext'
import MobileNav from './components/NavComponents/MobileNav'

export default function App() {
  const [mobile, setMobile] = useState<boolean>(window.innerWidth < 768)
  const { sidePanelVisible, toggleSidePanel } = useSidePanel()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) return setMobile(true)

      setMobile(false)
    }
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {mobile ? <MobileNav /> : <MainNav sidePanelVisible={sidePanelVisible} />}

      <section className='primary-display flex relative tablet:h-[calc(100vh-8rem)] h-[calc(100vh-6.4rem)]'>
        {!mobile && <SidePanel sidePanelVisible={sidePanelVisible} />}
        <main className='flex flex-grow justify-center items-center border-t-[1px] border-lavender bg-lgt-gray dark:bg-very-dark-gray'>
          {!mobile && <ShowSidePanel showSidePanel={toggleSidePanel} />}
        </main>
      </section>
    </>
  )
}
