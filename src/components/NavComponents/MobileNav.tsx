import MobileNavMenu from './MobileNavMenu'
import MobileEdit from './MobileEdit'
import { useOverlayContext } from '../../contexts/OverlayContext'
import MobileNavIcon from '../icons/MobileNavIcon'
import { useBoardDataContext } from '../../contexts/StateManagement'

export default function MobileNav() {
  const { fullScreen } = useOverlayContext()
  const { activeBoard } = useBoardDataContext()

  return (
    <>
      <nav
        className={`mobile-nav relative ${
          fullScreen ? '' : 'z-[101]'
        } pl-[2.4rem] pr-[1.6rem] py-[1.6rem] flex items-center justify-between bg-white`}
      >
        {activeBoard ? (
          <MobileNavMenu />
        ) : (
          // Empty div for flex spacing
          <MobileNavIcon />
        )}
        <MobileEdit activeBoard={activeBoard} />
      </nav>
    </>
  )
}
