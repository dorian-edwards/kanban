import { useOverlayContext } from '../../contexts/OverlayContext'
import CreateBoard from '../Forms/CreateBoard'
import BoardIcon from '../icons/BoardIcon'

export default function CreateBoardButton() {
  const { setOverlayActive, setModal } = useOverlayContext()

  return (
    <button
      className='link-wrapper pl-[2.4rem] rounded-r-xl py-[1.2rem] flex items-center'
      onClick={() => {
        setModal(<CreateBoard />)
        setOverlayActive(true)
      }}
    >
      <BoardIcon
        additionalStyling='mr-[1.2rem]'
        pathStyling='fill-primary-purple'
      />
      {'+  Create New Board'}
    </button>
  )
}
