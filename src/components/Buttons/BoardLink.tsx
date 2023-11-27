import AnimatedButton from '../Buttons/AnimatedButton'
import { BoardLinkprops } from '../../interfaces'
import BoardIcon from '../icons/BoardIcon'
import { useBoardDispatchContext } from '../../contexts/StateManagement'
import { useOverlayContext } from '../../contexts/OverlayContext'

export function BoardLink({ id, title, active }: BoardLinkprops) {
  const dispatch = useBoardDispatchContext()
  const { setOverlayActive, setFullScreen } = useOverlayContext()

  function handleActiveBoardUpdate(id: string): void {
    setOverlayActive(false)
    dispatch({
      type: 'SET_ACTIVE',
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
      <BoardIcon additionalStyling='mr-[1.2rem]' active={active} />
    </AnimatedButton>
  )
}
