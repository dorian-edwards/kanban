import MobileNavIcon from '../icons/MobileNavIcon'
import ChevronDown from '../icons/ChevronDown'
import VerticalEllipsis from '../icons/VerticalEllipsis'
import AddTask from '../icons/AddTask'

export default function MobileNav() {
  return (
    <nav className='pl-[2.4rem] pr-[1.6rem] py-[1.6rem] flex items-center justify-between bg-white'>
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
        <button className='flex justify-center items-center w-[4.8rem] h-[3.2rem] bg-main-purple-hover rounded-lg'>
          <AddTask />
        </button>
        <button className='ml-[2rem]'>
          <VerticalEllipsis />
        </button>
      </div>
    </nav>
  )
}
