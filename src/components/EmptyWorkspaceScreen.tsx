import { useOverlayContext } from '../contexts/OverlayContext'
import ButtonPrimary from './Buttons/ButtonPrimary'
import CreateBoard from './BoardComponents/CreateBoard'

// Display if there are no active boards
export default function EmptyWorkspaceScreen() {
  const { setOverlayActive, setModal } = useOverlayContext()

  return (
    <>
      <div className='text-center w-[90%] max-w-[49.3rem] mx-auto'>
        <h2 className='mb-[2.5rem] text-med-gray font-bold text-lg'>
          This workspace is empty. Create a new board to get started.
        </h2>
        <ButtonPrimary
          onClick={() => {
            setModal(<CreateBoard />)
            setOverlayActive(true)
          }}
          additionalStyling='max-w-[17.4rem] text-med'
        >
          {'+ Add New Board'}
        </ButtonPrimary>
      </div>
    </>
  )
}
