import { useOverlayContext } from '../../contexts/OverlayContext'
import { useBoardDataContext } from '../../contexts/StateManagement'
import { EditType } from '../../interfaces/DataInterfaces'
import { extractColumns } from '../../utilities/dataUtilities'
import Edit from '../Edit'
import TaskForm from '../TaskComponents/TaskForm'
import AddTask from '../icons/AddTask'

export default function MobileEdit() {
  const { activeBoard, columns } = useBoardDataContext()
  const { setModal, setOverlayActive } = useOverlayContext()
  const activeColumns = extractColumns(activeBoard, columns)

  return (
    <div className='mobile-nav-options flex items-center relative'>
      <button
        className={`flex justify-center items-center w-[4.8rem] h-32px rounded-lg ${
          activeBoard && activeColumns.length !== 0
            ? 'bg-primary-purple hover:bg-primary-purple-hover'
            : 'bg-primary-purple-disabled'
        }`}
        disabled={!activeBoard || activeColumns.length === 0}
        onClick={() => {
          setModal(<TaskForm />)
          setOverlayActive(true)
        }}
      >
        <AddTask />
      </button>
      <div className='menu ml-[2rem]'>
        <Edit type={EditType.board} disabled={!activeBoard} />
      </div>
    </div>
  )
}
