import { useOverlayContext } from '../contexts/OverlayContext'
import ButtonPrimary from './Buttons/ButtonPrimary'
import Overlay from './Overlay'

export default function EmptyBoardScreen() {
  const { overlayActive, setOverlayActive } = useOverlayContext()

  return (
    <>
      {overlayActive ? (
        <Overlay turnOverlayOff={() => setOverlayActive(false)}>
          <div>Broh</div>
        </Overlay>
      ) : (
        <></>
      )}
      <div className='text-center w-[90%] max-w-[49.3rem] mx-auto'>
        <h2 className='mb-[2.5rem] text-med-gray font-bold text-lg'>
          This board is empty. Create a new column to get started.
        </h2>
        <ButtonPrimary
          text='+ Add New Column'
          onClick={() => setOverlayActive(true)}
        />
      </div>
    </>
  )
}
