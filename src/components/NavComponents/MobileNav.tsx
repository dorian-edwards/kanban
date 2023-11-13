import { useState } from 'react'
import AddTask from '../icons/AddTask'
import ChevronUp from '../icons/ChevronUp'
import ChevronDown from '../icons/ChevronDown'
import Layover from '../Layover'
import MobileNavIcon from '../icons/MobileNavIcon'
import VerticalEllipsis from '../icons/VerticalEllipsis'
import MobileNavMenu from './MobileNavMenu'
import { Board } from '../../interfaces'

export interface MobileNavProps {
  activeBoard: Board | null
}

export default function MobileNav({ activeBoard }: MobileNavProps) {
  const [layoverActive, setLayoverActive] = useState<boolean>(false)

  return (
    <>
      {layoverActive ? (
        <Layover mobile={true} turnLayoverOff={() => setLayoverActive(false)}>
          <MobileNavMenu turnLayoverOff={() => setLayoverActive(false)} />
        </Layover>
      ) : null}
      <nav className='pl-[2.4rem] pr-[1.6rem] py-[1.6rem] flex items-center justify-between bg-white'>
        {activeBoard ? (
          <div className='flex items-center'>
            <MobileNavIcon />
            <h1 className='font-bold font-sans text-xl mr-[1rem]'>
              {activeBoard.title}
            </h1>
            {layoverActive ? (
              <button onClick={() => setLayoverActive(false)}>
                <ChevronUp />
              </button>
            ) : (
              <button onClick={() => setLayoverActive(true)}>
                <ChevronDown />
              </button>
            )}
          </div>
        ) : (
          <div></div>
        )}
        <div className='flex items-center'>
          <button
            className={`flex justify-center items-center w-[4.8rem] h-[3.2rem] rounded-lg ${
              activeBoard && activeBoard.columns.length !== 0
                ? 'bg-main-purple hover:bg-main-purple-hover'
                : 'bg-main-purple-disabled'
            }`}
            disabled={!activeBoard || activeBoard.columns.length === 0}
          >
            <AddTask />
          </button>
          <button className='menu ml-[2rem]'>
            <VerticalEllipsis />
          </button>
        </div>
      </nav>
    </>
  )
}
