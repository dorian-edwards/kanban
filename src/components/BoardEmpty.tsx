import { useOverlayContext } from '../contexts/OverlayContext'
import ButtonPrimary from './Buttons/ButtonPrimary'

export default function BoardEmpty() {
  const { setOverlayActive, setModal } = useOverlayContext()

  return (
    <>
      <div className='text-center w-[90%] max-w-[49.3rem] mx-auto'>
        <h2 className='mb-[2.5rem] text-med-gray font-bold text-lg'>
          This board is empty. Create a new column to get started.
        </h2>
        <ButtonPrimary
          onClick={() => {
            setModal(<>Add Column</>)
            setOverlayActive(true)
          }}
          additionalStyling='max-w-[17.4rem]'
        >
          {'+ Add New Column'}
        </ButtonPrimary>
      </div>
    </>
  )
}
