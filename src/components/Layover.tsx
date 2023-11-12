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
      className={`${
        mobile ? 'h-[calc(100vh_-_6.4rem)] top-[6.4rem]' : 'h-full'
      } h-full w-full absolute z-[100] flex justify-center items-center bg-[rgba(0,0,0,0.5)]`}
    >
      <div className='layover-menu absolute z-[101]' ref={ref}>
        {children}
      </div>
    </div>
  )
}
