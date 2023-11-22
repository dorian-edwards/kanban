import { MobileNavMenuProps } from '../../interfaces'
import ChevronDown from '../icons/ChevronDown'
import ChevronUp from '../icons/ChevronUp'
import MobileNavIcon from '../icons/MobileNavIcon'

export default function MobileNavMenu({
  activeBoardTitle,
  layoverActive,
  setFullScreen,
  setLayoverActive,
}: MobileNavMenuProps) {
  return (
    <div className='flex items-center'>
      <MobileNavIcon />
      <h1 className='font-bold font-sans text-xl mr-[1rem]'>
        {activeBoardTitle}
      </h1>
      {layoverActive ? (
        <button onClick={() => setLayoverActive(false)}>
          <ChevronUp />
        </button>
      ) : (
        <button
          onClick={() => {
            setFullScreen(false)
            setLayoverActive(true)
          }}
        >
          <ChevronDown />
        </button>
      )}
    </div>
  )
}
