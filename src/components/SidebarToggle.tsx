import HideSidebar from './icons/HideSidebar'

export default function SidebarToggle() {
  return (
    <button className='hide-toggle flex items-center'>
      <HideSidebar />
      <span className='ml-[1rem] text-med-gray'>Hide Sidebar</span>
    </button>
  )
}
