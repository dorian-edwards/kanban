import { useState, createRef, useEffect } from 'react'
import ColumnDropdown from './ColumnDropdown'
import ChevronDown from './icons/ChevronDown'
import ChevronUp from './icons/ChevronUp'

export default function ColumnSelector() {
  const [selectColumnActive, setSelectColumnActive] = useState<boolean>(false)
  const columnSelectRef = createRef<HTMLDivElement>()

  // Same for column status selector
  useEffect(() => {
    if (!selectColumnActive) return
    function handleColumnSelectOutsideClick(e: MouseEvent) {
      if (
        columnSelectRef.current &&
        !columnSelectRef.current.contains(e.target as HTMLElement)
      )
        setSelectColumnActive((prev) => !prev)
    }

    setTimeout(
      () => document.addEventListener('click', handleColumnSelectOutsideClick),
      500
    )

    return () =>
      document.removeEventListener('click', handleColumnSelectOutsideClick)
  }, [selectColumnActive, columnSelectRef])

  return (
    <div className='column-selector-wrapper'>
      <h3 className='column-selector-title text-med-gray text-xs font-bold mb-[0.8rem]'>
        Current Status
      </h3>
      <div className='relative'>
        <button
          className='flex items-center justify-between w-full px-16px py-[0.8rem] border border-cool-gray rounded-sm'
          onClick={() => setSelectColumnActive((prev) => !prev)}
        >
          <span className='text-sm font-medium leading-extra-loose'>
            {'Doing'}
          </span>
          {selectColumnActive ? <ChevronUp /> : <ChevronDown />}
        </button>
        {selectColumnActive ? <ColumnDropdown ref={columnSelectRef} /> : null}
      </div>
    </div>
  )
}
