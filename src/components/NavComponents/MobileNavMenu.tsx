import ChevronDown from '../icons/ChevronDown'
import ChevronUp from '../icons/ChevronUp'
import MobileNavIcon from '../icons/MobileNavIcon'
import { useOverlayContext } from '../../contexts/OverlayContext'
import MobileControlPanel from './MobileControlPanel'
import { useBoardDataContext } from '../../contexts/StateManagement'

export default function MobileNavMenu() {
  const {
    overlayActive,
    setOverlayActive,
    setModal,
    setFullScreen,
    fullScreen,
  } = useOverlayContext()
  const { activeBoard, boards } = useBoardDataContext()

  const chevron = overlayActive && !fullScreen ? <ChevronUp /> : <ChevronDown />

  return (
    <div className='flex items-center'>
      <MobileNavIcon />
      <h1 className='font-bold font-sans text-xl mr-[1rem] dark:text-white transition-colors duration-1000'>
        {activeBoard && boards[activeBoard].title}
      </h1>
      <button
        onClick={() => {
          setModal(
            <MobileControlPanel
              turnOverlayOff={() => setOverlayActive(false)}
            />
          )
          setFullScreen(!fullScreen)
          setOverlayActive(!overlayActive)
        }}
      >
        {chevron}
      </button>
    </div>
  )
}
