import { useOverlayContext } from '../contexts/OverlayContext'
import ButtonPrimary from './Buttons/ButtonPrimary'
import CreateBoard from './CreateBoard'
import Overlay from './Overlay'

// Display if there are no active boards
export default function EmptyWorkspaceScreen() {
  const { overlayActive, setOverlayActive } = useOverlayContext()

  return (
    <>
      {overlayActive ? (
        <Overlay turnOverlayOff={() => setOverlayActive(false)}>
          <CreateBoard />
        </Overlay>
      ) : (
        <></>
      )}
      <div className='text-center w-[90%] max-w-[49.3rem] mx-auto'>
        <h2 className='mb-[2.5rem] text-med-gray font-bold text-lg'>
          This workspace is empty. Create a new board to get started.
        </h2>
        <ButtonPrimary onClick={() => setOverlayActive(true)}>
          {'+ Add New Board'}
        </ButtonPrimary>
      </div>
    </>
  )
}
