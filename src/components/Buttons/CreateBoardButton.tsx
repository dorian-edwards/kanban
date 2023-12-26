import { useOverlayContext } from '../../contexts/OverlayContext'
import BoardForm from '../BoardComponents/BoardForm'
import BoardIcon from '../icons/BoardIcon'

export default function CreateBoardButton() {
  const { setOverlayActive, setModal } = useOverlayContext()

  return (
    <button
      className='link-wrapper pl-24px rounded-r-xl py-12px flex items-center'
      onClick={() => {
        setModal(<BoardForm editMode={false} />)
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
