import AnimatedButton from '../Buttons/AnimatedButton'
import { BoardLinkprops } from '../../interfaces/PropInterfaces'
import BoardIcon from '../icons/BoardIcon'
import { useBoardDispatchContext } from '../../contexts/StateManagement'
import { useOverlayContext } from '../../contexts/OverlayContext'
import { DATA_ACTION } from '../../interfaces/DataInterfaces'

export function BoardLink({ id, title, active }: BoardLinkprops) {
  const dispatch = useBoardDispatchContext()
  const { setOverlayActive, setFullScreen } = useOverlayContext()

  function handleActiveBoardUpdate(id: string): void {
    setOverlayActive(false)
    dispatch({
      type: DATA_ACTION.SET_ACTIVE_BOARD,
      payload: {
        id: id,
      },
    })
  }
  return (
    <AnimatedButton
      text={title}
      active={active}
      onClickAction={() => {
        setFullScreen(true)
        handleActiveBoardUpdate(id)
      }}
      link={true}
    >
      <BoardIcon additionalStyling='mr-12px' active={active} />
    </AnimatedButton>
  )
}
