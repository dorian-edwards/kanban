import { useEffect, useRef } from 'react'
import { LayoverProps } from '../interfaces'

export default function Layover({ children, turnLayoverOff }: LayoverProps) {
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!ref.current) return

      // @ts-expect-error
      if (!ref.current.contains(event.target)) turnLayoverOff()
    }

    const test = setTimeout(() => {
      document.addEventListener('click', handleClickOutside)
    }, 500)

    return () => {
      document.removeEventListener('click', handleClickOutside)
      clearTimeout(test)
    }
  }, [turnLayoverOff])

  return (
    <div
      className={`w-full absolute z-[100] flex justify-center bg-[rgba(0,0,0,0.5)] h-full items-center top-0 left-0`}
    >
      <div
        className='layover-menu absolute z-[101] w-full max-w-[26.4rem] mt-4'
        ref={ref}
      >
        {children}
      </div>
    </div>
  )
}
