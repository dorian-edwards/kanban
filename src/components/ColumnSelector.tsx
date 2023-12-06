import { forwardRef } from 'react'

interface Props {}
type Ref = HTMLDivElement

const ColumnSelector = forwardRef<Ref, Props>(function ColumnSelector(
  props,
  ref
) {
  return (
    <div
      className='column-choices rounded-sm bg-white p-16px absolute w-full mt-[0.8rem] text-sm font-medium leading-extra-loose text-med-gray'
      ref={ref}
    >
      <ul className='flex flex-col gap-[0.8rem]'>
        <li>
          <button className='w-full'>Todo</button>
        </li>
        <li>
          <button className='w-full'>Doing</button>
        </li>
        <li>
          <button className='w-full'>Done</button>
        </li>
      </ul>
    </div>
  )
})

export default ColumnSelector
