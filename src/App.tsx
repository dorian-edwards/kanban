import { useEffect, useState } from 'react'
import { useSidePanel } from './contexts/SidePanelContext'
import { useDataContext } from './contexts/DataContext'
import MainNav from './components/NavComponents/MainNav'
import ShowSidePanel from './components/NavComponents/ShowSidePanel'
import SidePanel from './components/NavComponents/SidePanel'
import MobileNav from './components/NavComponents/MobileNav'
import ButtonPrimary from './components/Buttons/ButtonPrimary'
import useScreenMonitor from './components/Hooks/useScreenMonitor'

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

      <section className='primary-display flex relative tablet:h-[calc(100vh-8rem)] h-[calc(100vh-6.4rem)]'>
        {!mobile && <SidePanel sidePanelVisible={sidePanelVisible} />}
        <main className='board-display flex flex-grow justify-center items-center border-t-[1px] border-lavender bg-lgt-gray dark:bg-very-dark-gray'>
          {!mobile && <ShowSidePanel showSidePanel={toggleSidePanel} />}
          <CreateBoardScreen />
        </main>
      </section>
    </>
  )
}

export function CreateBoardScreen() {
  return (
    <div className='text-center w-[90%] max-w-[49.3rem] mx-auto'>
      <h2 className='mb-[2.5rem] text-med-gray font-bold text-lg'>
        This board is empty. Create a new column to get started.
      </h2>
      <ButtonPrimary text='+ Add New Column' />
    </div>
  )
}
