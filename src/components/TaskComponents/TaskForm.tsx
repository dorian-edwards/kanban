import { FormEvent, useState } from 'react'
import {
  useBoardDataContext,
  useBoardDispatchContext,
} from '../../contexts/StateManagement'
import { useOverlayContext } from '../../contexts/OverlayContext'
import {
  BoardAction,
  DATA_ACTION,
  TaskFormData,
  TaskInterface,
} from '../../interfaces/DataInterfaces'
import keyGen from '../../utilities/keyGen'
import { arrayToObject, extractSubtasks } from '../../utilities/dataUtilities'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import Label from '../FormElements/Label'
import Input from '../FormElements/Input'
import TextArea from '../FormElements/TextArea'
import DynamicInput from '../FormElements/DynamicInput'
import ButtonSecondary from '../Buttons/ButtonSecondary'
import ColumnSelector from './ColumnSelector'

export default function TaskForm({
  taskToEdit,
}: {
  taskToEdit?: TaskInterface
}) {
  const { activeBoard, columns, subtasks } = useBoardDataContext()
  const dispatch = useBoardDispatchContext()
  const { setOverlayActive } = useOverlayContext()
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errorTimeout, setErrorTimeOut] = useState<NodeJS.Timeout | undefined>()

  const formData = taskToEdit
    ? {
        id: taskToEdit.id,
        title: taskToEdit.title,
        description: taskToEdit.description,
        subtasks: Object.values(subtasks).filter(
          ({ taskId }) => taskId === taskToEdit.id
        ),
        status: {
          title: columns[taskToEdit.columnId].title,
          id: columns[taskToEdit.columnId].id,
        },
      }
    : {
        id: '',
        title: '',
        description: '',
        subtasks: [
          { id: '', description: '', placeholder: 'e.g. Make coffee' },
          {
            id: '',
            description: '',
            placeholder: 'e.g. Drink coffee and smile',
          },
        ],
        status: {
          title: Object.values(columns).filter(
            (col) => col.boardId === activeBoard
          )[0].title,
          id: Object.values(columns).filter(
            (col) => col.boardId === activeBoard
          )[0].id,
        },
      }

  const [task, setTask] = useState<TaskFormData>(formData)

  const handleAddSubtask = () => {
    setTask({
      ...task,
      subtasks: [
        ...task.subtasks,
        { id: keyGen('ST'), description: '', placeholder: '' },
      ],
    })
  }

  const handleSubtaskChange = (
    e: FormEvent<HTMLInputElement>,
    index: number
  ): void => {
    const copy = structuredClone(task)
    copy.subtasks[index].description = e.currentTarget.value
    setTask(copy)
  }

  const handleSubtaskRemove = (index: number) => {
    setTask({
      ...task,
      subtasks: task.subtasks.filter((task, i) => i !== index),
    })
  }

  const handleStatusChange = (id: string) => {
    setTask({ ...task, status: { title: columns[id].title, id } })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isFormValid()) {
      setIsSubmitted(true)
      setErrorTimeOut(
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      )
      return
    }

    if (taskToEdit) {
      updateTask(dispatch, task, subtasks)
    } else {
      createTask(dispatch, task)
    }

    setOverlayActive(false)
  }

  const isFormValid = (): boolean => {
    let result = true
    if (task.title.trim() === '') return false
    // if (task.description.trim() === '') return false
    if (task.status.title.trim() === '') return false

    task.subtasks.forEach(({ description }) => {
      result = description.trim() !== ''
    })
    return result
  }

  return (
    <div className='bg-white p-24px rounded-sm mx-[16px]'>
      <form onSubmit={handleSubmit}>
        <h2 className='task-form-title mb-24px font-bold text-18px'>
          {taskToEdit ? 'Edit Task' : 'Add New Task'}
        </h2>
        <div className='mb-24px'>
          <Label htmlFor='task-title'>Title</Label>
          <Input
            type='text'
            id='task-title'
            value={task.title}
            placeholder='e.g. Take coffee break'
            onChange={(e: FormEvent<HTMLInputElement>) => {
              setIsSubmitted(false)
              setTask({ ...task, title: e.currentTarget.value })
            }}
            isSubmitted={isSubmitted}
          />
        </div>
        <div className='mb-24px'>
          <Label htmlFor='task-description'>Description</Label>
          <TextArea
            id='task-description'
            value={task.description}
            placeholder={
              "e.g. It's always good to take a break. This 15 break will recharge the batteries a little."
            }
            onChange={function (e: FormEvent<HTMLTextAreaElement>): void {
              setIsSubmitted(false)
              setTask({ ...task, description: e.currentTarget.value })
            }}
            isSubmitted={isSubmitted}
          />
        </div>
        <div className='mb-12px'>
          <Label>Subtasks</Label>
          {task.subtasks.map(({ id, description, placeholder }, index) => (
            <div key={index}>
              <DynamicInput
                onClick={() => handleSubtaskRemove(index)}
                inputType='text'
                buttonType='button'
                value={description}
                placeholder={placeholder}
                onChange={(e) => handleSubtaskChange(e, index)}
                isSubmitted={isSubmitted}
              />
            </div>
          ))}
        </div>
        <ButtonSecondary
          additionalStyling='mb-24px'
          type='button'
          onClick={handleAddSubtask}
        >
          {'+ Add New Subtask'}
        </ButtonSecondary>
        <ColumnSelector
          status={task.status.title}
          changeStatus={handleStatusChange}
          additionalStyling={'mb-24px'}
        />
        <ButtonPrimary type='submit'>
          {taskToEdit ? 'Save Changes' : 'Create Task'}
        </ButtonPrimary>
      </form>
    </div>
  )
}

export function createTask(
  dispatch: React.Dispatch<BoardAction>,
  task: TaskFormData
) {
  const taskId = keyGen('T')

  dispatch({
    type: DATA_ACTION.CREATE_TASK,
    payload: {
      id: taskId,
      title: task.title,
      description: task.description,
      columnId: task.status.id,
    },
  })

  task.subtasks.forEach(({ id, description }) => {
    dispatch({
      type: DATA_ACTION.CREATE_SUBTASK,
      payload: {
        id,
        description,
        complete: false,
        taskId,
      },
    })
  })
}

export function updateTask(
  dispatch: React.Dispatch<BoardAction>,
  task: TaskFormData,
  subtasks: {
    [key: string]: {
      id: string
      description: string
      complete: boolean
      taskId: string
    }
  }
) {
  const preEditSubtasks = extractSubtasks(task.id, subtasks) // <- current subtasks associated with taskid
  const postEditSubtasks = arrayToObject(task.subtasks) // <-subtasks in state data

  console.log(task)

  // delete subtasks that are no longer present
  for (let subtask of preEditSubtasks) {
    if (!(subtask.id in postEditSubtasks)) {
      dispatch({
        type: DATA_ACTION.DELETE_SUBTASK,
        payload: { id: subtask.id },
      })
    }
  }

  for (let subtask of task.subtasks) {
    dispatch({
      type: DATA_ACTION.CREATE_SUBTASK,
      payload: { ...subtask, taskId: task.id },
    })
  }

  dispatch({
    type: DATA_ACTION.UPDATE_TASK,
    payload: {
      id: task.id,
      title: task.title,
      description: task.description,
      columnId: task.status.id,
    },
  })
}
