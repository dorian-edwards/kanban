import { useLayoverContext } from '../contexts/LayoverContext'
import ButtonPrimary from './Buttons/ButtonPrimary'
import Layover from './Layover'

export default function EmptyBoardScreen() {
  const { layoverActive, setLayoverActive } = useLayoverContext()

  return (
    <>
      {layoverActive ? (
        <Layover turnLayoverOff={() => setLayoverActive(false)}>
          <div>Broh</div>
        </Layover>
      ) : (
        <></>
      )}
      <div className='text-center w-[90%] max-w-[49.3rem] mx-auto'>
        <h2 className='mb-[2.5rem] text-med-gray font-bold text-lg'>
          This board is empty. Create a new column to get started.
        </h2>
        <ButtonPrimary
          text='+ Add New Column'
          onClick={() => setLayoverActive(true)}
        />
      </div>
    </>
  )
}
