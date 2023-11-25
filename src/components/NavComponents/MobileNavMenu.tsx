import { useState } from 'react'
import { MobileNavMenuProps } from '../../interfaces'
import ChevronDown from '../icons/ChevronDown'
import ChevronUp from '../icons/ChevronUp'
import MobileNavIcon from '../icons/MobileNavIcon'

export default function MobileNavMenu({
  activeBoardTitle,
  overlayActive,
  setFullScreen,
  setOverlayActive,
  fullScreenActive,
}: MobileNavMenuProps) {
  const [chevronPressed, setChevronPressed] = useState<boolean>(false)

  const chevron = chevronPressed ? <ChevronUp /> : <ChevronDown />

  return (
    <div className='flex items-center'>
      <MobileNavIcon />
      <h1 className='font-bold font-sans text-xl mr-[1rem]'>
        {activeBoardTitle}
      </h1>
      <button
        onClick={() => {
          setFullScreen(!fullScreenActive)
          setOverlayActive(!overlayActive)
          setChevronPressed(!chevronPressed)
        }}
      >
        {chevron}
      </button>
    </div>
  )
}
