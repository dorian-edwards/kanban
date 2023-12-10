import { forwardRef } from 'react'
import { EditType } from '../interfaces/DataInterfaces'

interface Props {
  type: string
  taskId?: string
}
type Ref = HTMLDivElement

const EditMenu = forwardRef<Ref, Props>(function EditMenu(
  { type, taskId },
  ref
) {
  const menuPosition =
    type === EditType.board
      ? 'tablet:left-0 tablet:bottom-[-8.8rem] right-0 bottom-[-10.4rem]'
      : 'tablet:right-[-9.7rem] tablet:top-[6.6rem] right-0 top-[4rem]'
  return (
    <div
      className={`task-menu bg-white p-16px absolute w-[19.2rem] rounded-sm shadow-md h-[9.4rem] ${menuPosition}`}
      ref={ref}
    >
      <button className='block text-sm font-med leading-extra-loose text-med-gray font-medium mb-16px'>
        {`Edit ${type}`}
      </button>
      <button className='block text-sm font-med leading-extra-loose text-red font-medium'>
        {`Delete ${type}`}
      </button>
    </div>
  )
})

export default EditMenu
