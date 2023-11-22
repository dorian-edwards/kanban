import { useLayoverContext } from '../contexts/LayoverContext'
import ButtonPrimary from './Buttons/ButtonPrimary'
import Layover from './Layover'

// Display if there are no active boards
export default function EmptyWorkspaceScreen() {
  const { layoverActive, setLayoverActive } = useLayoverContext()

  return (
    <>
      {layoverActive ? (
        <Layover turnLayoverOff={() => setLayoverActive(false)}>
          <CreateBoard />
        </Layover>
      ) : (
        <></>
      )}
      <div className='text-center w-[90%] max-w-[49.3rem] mx-auto'>
        <h2 className='mb-[2.5rem] text-med-gray font-bold text-lg'>
          This workspace is empty. Create a new board to get started.
        </h2>
        <ButtonPrimary
          text='+ Add New Board'
          onClick={() => setLayoverActive(true)}
        />
      </div>
    </>
  )
}

export function CreateBoard() {
  return (
    <>
      <form action=''>
        <label htmlFor='name'>Name</label>
        <input type='text' name='' id='name' />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
