import { useEffect, useRef } from 'react'
import { LayoverProps } from '../interfaces'

export default function Layover({
  children,
  turnLayoverOff,
  mobile,
}: LayoverProps) {
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      console.log('in layover')
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
      className={`w-full absolute z-[100] flex justify-center  bg-[rgba(0,0,0,0.5)] ${
        mobile ? 'h-[calc(100vh_-_6.4rem)] top-[6.4rem]' : 'h-full items-center'
      }`}
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
