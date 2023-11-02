import HideIcon from '../icons/HideIcon'
import { useSidePanel } from '../../contexts/SidePanelContext'

export default function HideSidePanel() {
  const { toggleSidePanel } = useSidePanel()

  return (
    <button
      className=' group pl-[2rem] w-[27.6rem] h-[4.8rem] rounded-r-xl hide-toggle flex items-center relative before:content-[""] before:absolute before:w-0 before:h-full before:bg-[rgba(99,_95,_199,_0.1)] before:rounded-r-xl before:left-[-2rem] before:z-[-1] before:hover:w-full before:transition-[width] before:duration-1000'
      onClick={toggleSidePanel}
    >
      <HideIcon />
      <span className='ml-[1rem] text-med-gray group-hover:text-main-purple transition-colors duration-1000'>
        Hide Sidebar
      </span>
    </button>
  )
}
