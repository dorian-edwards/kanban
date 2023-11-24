import { useEffect, useRef } from 'react'
import { OverlayProps } from '../interfaces'

export default function Overlay({ children, turnOverlayOff }: OverlayProps) {
  const ref = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   function handleClickOutside(event: MouseEvent) {
  //     if (!ref.current) return

  //     // if (!ref.current.contains(event.target)) turnOverlayOff()
  //     if (
  //       event.target instanceof HTMLElement &&
  //       !ref.current.contains(event.target)
  //     ) {
  //       console.log('hey')
  //       turnOverlayOff()
  //     }
  //   }

  //   const test = setTimeout(() => {
  //     document.addEventListener('click', handleClickOutside)
  //   }, 500)

  //   return () => {
  //     document.removeEventListener('click', handleClickOutside)
  //     clearTimeout(test)
  //   }
  // }, [turnOverlayOff])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      console.log((e.target as HTMLElement).getAttribute('id'))
      if ((e.target as HTMLElement).getAttribute('id') === 'overlay')
        turnOverlayOff()
    }

    document.addEventListener('click', handleClickOutside)

    return () => document.removeEventListener('click', handleClickOutside)
  }, [turnOverlayOff])

  return (
    <div
      id='overlay'
      className={`w-full absolute z-[100] flex justify-center bg-[rgba(0,0,0,0.5)] h-full items-center top-0 left-0`}
    >
      <div
        className='overlay-menu absolute z-[101] w-full w-max-[48rem] mt-4'
        ref={ref}
      >
        {children}
      </div>
    </div>
  )
}
