import { forwardRef } from 'react'

interface Props {}
type Ref = HTMLDivElement

const EditMenu = forwardRef<Ref, Props>(function EditMenu(props, ref) {
  // <- this
  return (
    <div
      className='task-menu bg-white p-16px absolute w-[19.2rem] rounded-sm tablet:right-[-9.7rem] tablet:top-[6.6rem] right-0 top-[4rem] shadow-md'
      ref={ref}
    >
      <button className='block text-sm font-med leading-extra-loose text-med-gray font-medium mb-16px'>
        Edit Task
      </button>
      <button className='block text-sm font-med leading-extra-loose text-red font-medium'>
        Delete Task
      </button>
    </div>
  )
})

export default EditMenu
