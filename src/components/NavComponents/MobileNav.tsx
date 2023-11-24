import { useState } from 'react'
import Overlay from '../Overlay'
import { MobileNavProps } from '../../interfaces'
import MobileNavMenu from './MobileNavMenu'
import MobileControlPanel from './MobileControlPanel'
import MobileEdit from './MobileEdit'

export default function MobileNav({ activeBoard }: MobileNavProps) {
  const [overlayActive, setOverlayActive] = useState<boolean>(false)
  const [fullScreen, setFullScreen] = useState<boolean>(true)

  const modal = fullScreen ? (
    <div>Broh</div>
  ) : (
    <MobileControlPanel turnOverlayOff={() => setOverlayActive(false)} />
  )

  return (
    <>
      {overlayActive ? (
        <Overlay turnOverlayOff={() => setOverlayActive(false)}>
          {modal}
        </Overlay>
      ) : null}
      <nav
        className={`mobile-nav relative ${
          fullScreen ? '' : 'z-[101]'
        } pl-[2.4rem] pr-[1.6rem] py-[1.6rem] flex items-center justify-between bg-white`}
      >
        {activeBoard ? (
          <MobileNavMenu
            activeBoardTitle={activeBoard.title}
            overlayActive={overlayActive}
            setFullScreen={setFullScreen}
            setOverlayActive={setOverlayActive}
            fullScreenActive={fullScreen}
          />
        ) : (
          // Empty div for flex spacing
          <div></div>
        )}
        <MobileEdit
          activeBoard={activeBoard}
          setFullScreen={setFullScreen}
          setOverlayActive={setOverlayActive}
        />
      </nav>
    </>
  )
}
