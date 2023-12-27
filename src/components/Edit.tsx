import { useState, createRef, useEffect } from 'react'
import EditMenu from './EditMenu'
import VerticalEllipsis from './icons/VerticalEllipsis'

export interface EditProps {
  type: string
  taskId?: string
  disabled: boolean
}

export default function Edit({ type, taskId, disabled }: EditProps) {
  const [menuActive, setMenuActive] = useState<boolean>(false)
  const editMenuRef = createRef<HTMLDivElement>() // <- this

  useEffect(() => {
    if (!menuActive) return
    function handleEditMenuOutsideClick(e: MouseEvent) {
      if (
        editMenuRef.current &&
        !editMenuRef.current.contains(e.target as HTMLElement)
      )
        setMenuActive((prev) => !prev)
    }

    setTimeout(
      () => document.addEventListener('click', handleEditMenuOutsideClick),
      500
    ) // <- this

    return () =>
      document.removeEventListener('click', handleEditMenuOutsideClick)
  }, [menuActive, editMenuRef])

  return (
    <div className='edit-menu'>
      <button
        className='w-[25px] flex justify-center'
        onClick={() => setMenuActive((prev) => !prev)}
        disabled={disabled}
      >
        <VerticalEllipsis />
      </button>
      {menuActive ? (
        <EditMenu
          ref={editMenuRef}
          type={type}
          taskId={taskId}
          setMenuActive={setMenuActive}
        />
      ) : null}
    </div>
  )
}
