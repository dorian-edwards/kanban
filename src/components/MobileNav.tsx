import MobileNavIcon from './icons/MobileNavIcon'
import ChevronDown from './icons/ChevronDown'
import VerticalEllipsis from './icons/VerticalEllipsis'
import AddTask from './icons/AddTask'

export default function MobileNav() {
  return (
    <nav className='px-[1rem] py-[2rem] flex items-center justify-between bg-white'>
      <div className='flex items-center'>
        <MobileNavIcon />
        <h1 className='font-bold font-sans text-xl mr-[1rem]'>
          Platform Launch
        </h1>
        <button>
          <ChevronDown />
        </button>
      </div>
      <div className='flex items-center'>
        <button className='px-[1.8rem] py-[1rem] bg-main-purple-hover rounded-lg'>
          <AddTask />
        </button>
        <button className='ml-[2rem]'>
          <VerticalEllipsis />
        </button>
      </div>
    </nav>
  )
}
