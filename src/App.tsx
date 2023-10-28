import { useState } from 'react'
import NavDark from './components/icons/NavDark'

export default function App() {
  const [sidePanelVisible, setSidePanelVisible] = useState(false)

  function handleClick(): void {
    setSidePanelVisible(!sidePanelVisible)
  }

  return (
    <>
      <nav className=''>
        <div
          className={`side-nav float-left bg-med-gray h-[100vh] ${
            sidePanelVisible ? 'w-[26rem] pl-[2.8rem] mr-[2.4rem]' : 'w-0'
          } pt-[2.8rem] overflow-x-hidden transition-[width,_padding,_margin] ease-in-out duration-1000 whitespace-nowrap`}
        >
          <NavDark />
        </div>
        <div className='main-nav py-[2.8rem] bg-red-hover pl-[2.8rem]'>
          Main Nav
        </div>
      </nav>
      <main className='h-[calc(100vh-80px)] flex justify-center items-center'>
        <button
          className='bg-red text-white px-[1rem] py-[0.5rem] rounded-sm'
          onClick={handleClick}
        >
          Press Here
        </button>
      </main>
    </>
  )
}
