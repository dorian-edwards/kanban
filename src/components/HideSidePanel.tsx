import HideIcon from './icons/HideIcon'
import { useSidePanel } from '../contexts/SidePanelContext'

export default function HideSidePanel() {
  const { toggleSidePanel } = useSidePanel()

  return (
    <button className='hide-toggle flex items-center' onClick={toggleSidePanel}>
      <HideIcon />
      <span className='ml-[1rem] text-med-gray'>Hide Sidebar</span>
    </button>
  )
}
