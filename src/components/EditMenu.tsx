import { forwardRef } from 'react'
import { EditType } from '../interfaces/DataInterfaces'
import { EditMenuProps, Ref } from '../interfaces/PropInterfaces'
import { useOverlayContext } from '../contexts/OverlayContext'
import DeleteConfirmation from './DeleteConfirmation'
import BoardForm from './BoardComponents/BoardForm'
import TaskForm from './TaskComponents/TaskForm'
import { useBoardDataContext } from '../contexts/StateManagement'

const EditMenu = forwardRef<Ref, EditMenuProps>(function EditMenu(
  { type, taskId, setMenuActive },
  ref
) {
  const { setModal, setOverlayActive } = useOverlayContext()
  const { tasks } = useBoardDataContext()

  const menuPosition =
    type === EditType.board
      ? 'tablet:left-0 tablet:bottom-[-8.8rem] right-0 bottom-[-10.4rem]'
      : 'tablet:right-[-9.7rem] tablet:top-[6.6rem] right-0 top-[4rem]'

  return (
    <div
      className={`task-menu bg-white dark:bg-very-dark-gray dark:shadow-none p-16px absolute w-[19.2rem] rounded-sm shadow-md h-[9.4rem] z-50 ${menuPosition}`}
      ref={ref}
    >
      <button
        className='block text-sm font-med leading-extra-loose text-med-gray font-medium mb-16px'
        onClick={() => {
          setModal(
            type === EditType.board ? (
              <BoardForm editMode={true} />
            ) : (
              <TaskForm taskToEdit={tasks[taskId!]} />
            )
          )
          setOverlayActive(true)
          setMenuActive(false)
        }}
      >
        {`Edit ${type}`}
      </button>
      <button
        className='block text-sm font-med leading-extra-loose text-red font-medium'
        onClick={() => {
          setModal(<DeleteConfirmation type={type} taskId={taskId} />)
          setOverlayActive(true)
          setMenuActive(false)
        }}
      >
        {`Delete ${type}`}
      </button>
    </div>
  )
})

export default EditMenu
