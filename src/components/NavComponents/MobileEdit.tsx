import { MobileEditProps } from '../../interfaces'
import AddTask from '../icons/AddTask'
import VerticalEllipsis from '../icons/VerticalEllipsis'

export default function MobileEdit({ activeBoard }: MobileEditProps) {
  return (
    <div className='mobile-edit flex items-center'>
      <button
        className={`flex justify-center items-center w-[4.8rem] h-32px rounded-lg ${
          activeBoard && activeBoard.columns.length !== 0
            ? 'bg-primary-purple hover:bg-primary-purple-hover'
            : 'bg-primary-purple-disabled'
        }`}
        disabled={!activeBoard || activeBoard.columns.length === 0}
        onClick={() => {
          // setFullScreen(true)
          // setOverlayActive(true)
        }}
      >
        <AddTask />
      </button>
      <button className='menu ml-[2rem]'>
        <VerticalEllipsis />
      </button>
    </div>
  )
}
