import AnimatedButton from '../Buttons/AnimatedButton'
import { BoardLinkprops } from '../../interfaces'
import BoardIcon from '../icons/BoardIcon'

export function BoardLink({ id, title, active, update }: BoardLinkprops) {
  return (
    <AnimatedButton
      text={title}
      active={active}
      onClickAction={() => {
        update(id)
      }}
      link={true}
    >
      <BoardIcon additionalStyling='mr-[1.2rem]' active={active} />
    </AnimatedButton>
  )
}
