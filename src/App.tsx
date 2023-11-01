import { useState } from 'react'
import MainNav from './components/MainNav'
import SidePanel from './components/SidePanel'

export default function App() {
  const [sidePanelVisible, setSidePanelVisible] = useState(false)

  function handleClick(): void {
    setSidePanelVisible(!sidePanelVisible)
  }

  return (
    <>
      <MainNav sidePanelVisible={sidePanelVisible} />
      <div className='flex'>
        <SidePanel sidePanelVisible={sidePanelVisible} />
        <main className='flex flex-grow justify-center items-center border-t-[1px] border-lavender'>
          <button
            className='py-[1rem] px-[2rem] bg-red-hover text-white rounded-sm'
            onClick={handleClick}
          >
            Click Me
          </button>
        </main>
      </div>
    </>
  )
}
