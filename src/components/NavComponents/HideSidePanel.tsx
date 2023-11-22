import HideIcon from '../icons/HideIcon'
import { useSidePanel } from '../../contexts/SidePanelContext'
import AnimatedButton from '../Buttons/AnimatedButton'

export default function HideSidePanel() {
  const { toggleSidePanel } = useSidePanel()

  return (
    <AnimatedButton
      text='Hide Sidbar'
      onClickAction={toggleSidePanel}
      link={false}
    >
      <HideIcon />
    </AnimatedButton>
  )
}
