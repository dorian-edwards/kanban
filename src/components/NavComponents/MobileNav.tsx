import { useState } from 'react'
import Layover from '../Layover'
import MobileControlPanel from './MobileControlPanel'
import { MobileNavProps } from '../../interfaces'
import MobileNavMenu from './MobileNavMenu'
import MobileEdit from './MobileEdit'

export default function MobileNav({ activeBoard }: MobileNavProps) {
  const [layoverActive, setLayoverActive] = useState<boolean>(false)
  const [fullScreen, setFullScreen] = useState<boolean>(true)

  const modal = fullScreen ? (
    <div>Broh</div>
  ) : (
    <MobileControlPanel turnLayoverOff={() => setLayoverActive(false)} />
  )

  return (
    <>
      {layoverActive ? (
        <Layover turnLayoverOff={() => setLayoverActive(false)}>
          {modal}
        </Layover>
      ) : null}
      <nav
        className={`mobile-nav relative ${
          fullScreen ? '' : 'z-[101]'
        } pl-[2.4rem] pr-[1.6rem] py-[1.6rem] flex items-center justify-between bg-white`}
      >
        {activeBoard ? (
          <MobileNavMenu
            activeBoardTitle={activeBoard.title}
            layoverActive={layoverActive}
            setFullScreen={setFullScreen}
            setLayoverActive={setLayoverActive}
          />
        ) : (
          // Empty div for flex spacing
          <div></div>
        )}
        <MobileEdit
          activeBoard={activeBoard}
          setFullScreen={setFullScreen}
          setLayoverActive={setLayoverActive}
        />
      </nav>
    </>
  )
}
