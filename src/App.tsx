import { useState } from 'react'
import NavDark from './components/icons/NavDark'

export default function App() {
  const [sidePanelVisible, setSidePanelVisible] = useState(false)

  function handleClick(): void {
    setSidePanelVisible(!sidePanelVisible)
  }

  return (
    <>
      <nav className='main-nav flex bg-white'>
        <div
          className={`logo-wrapper py-[2.8rem] pl-[2.6rem] border-r-[1px] border-lavendar transition-[padding] duration-1000 ${
            sidePanelVisible ? 'pr-[8rem]' : 'pr-[2.4rem]'
          }`}
        >
          <NavDark />
        </div>
        <h1 className='py-[2.8rem] pl-[2.5rem]'>Main Nav</h1>
      </nav>
      <div className='flex'>
        <nav
          className={`side-nav h-[calc(100vh-8.2rem)] bg-white overflow-x-hidden transition-[width] duration-1000 whitespace-nowrap ${
            sidePanelVisible ? 'w-[26rem]' : 'w-0'
          } border-r-[1px] border-lavendar`}
        >
          Side Nav
        </nav>
        <main className='flex flex-grow justify-center items-center border-t-[1px] border-lavendar'>
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
