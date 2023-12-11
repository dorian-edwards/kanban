import { useOverlayContext } from '../../contexts/OverlayContext'
import CreateBoard from '../BoardComponents/CreateBoard'
import BoardIcon from '../icons/BoardIcon'

export default function CreateBoardButton() {
  const { setOverlayActive, setModal } = useOverlayContext()

  return (
    <button
      className='link-wrapper pl-24px rounded-r-xl py-12px flex items-center'
      onClick={() => {
        setModal(<CreateBoard />)
        setOverlayActive(true)
      }}
    >
      <BoardIcon
        additionalStyling='mr-12px'
        pathStyling='fill-primary-purple'
      />
      {'+  Create New Board'}
    </button>
  )
}
