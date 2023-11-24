import { useOverlayContext } from '../../contexts/OverlayContext'
import BoardIcon from '../icons/BoardIcon'

export default function CreateBoardButton() {
  const { setOverlayActive } = useOverlayContext()

  return (
    <button
      className='link-wrapper pl-[2.4rem] rounded-r-xl py-[1.2rem] flex items-center'
      onClick={() => setOverlayActive(true)}
    >
      <BoardIcon
        additionalStyling='mr-[1.2rem]'
        pathStyling='fill-main-purple'
      />
      {'+  Create New Board'}
    </button>
  )
}
