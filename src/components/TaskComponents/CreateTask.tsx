import { FormEvent, useState } from 'react'
import {
  useBoardDataContext,
  useBoardDispatchContext,
} from '../../contexts/StateManagement'
import keyGen from '../../utilities/keyGen'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import Label from '../FormElements/Label'
import Input from '../FormElements/Input'
import TextArea from '../FormElements/TextArea'
import DynamicInput from '../FormElements/DynamicInput'
import ButtonSecondary from '../Buttons/ButtonSecondary'
import ColumnSelector from './ColumnSelector'
import { DATA_ACTION } from '../../interfaces/DataInterfaces'
import { useOverlayContext } from '../../contexts/OverlayContext'

export interface TaskFormData {
  id: string
  title: string
  description: string
  subtasks: { id: string; description: string; placeholder?: string }[]
  status: { title: string; id: string }
}

export default function CreateTask() {
  const { activeBoard, columns } = useBoardDataContext()
  const dispatch = useBoardDispatchContext()
  const { setOverlayActive } = useOverlayContext()

  const [task, setTask] = useState<TaskFormData>({
    id: '',
    title: '',
    description: '',
    subtasks: [
      { id: '', description: '', placeholder: 'e.g. Make coffee' },
      { id: '', description: '', placeholder: 'e.g. Drink coffee and smile' },
    ],
    status: {
      title: Object.values(columns).filter(
        (col) => col.boardId === activeBoard
      )[0].title,
      id: Object.values(columns).filter((col) => col.boardId === activeBoard)[0]
        .id,
    },
  })
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errorTimeout, setErrorTimeOut] = useState<NodeJS.Timeout | undefined>()

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

    task.subtasks.forEach(({ description }) => {
      dispatch({
        type: DATA_ACTION.CREATE_SUBTASK,
        payload: {
          id: keyGen('ST'),
          description,
          complete: false,
          taskId,
        },
      })
    })

    setOverlayActive(false)
  }

  const isFormValid = (): boolean => {
    let result = true
    if (task.title.trim() === '') return false
    if (task.description.trim() === '') return false
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
          Add New Task
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
          onClick={() => {
            setTask({
              ...task,
              subtasks: [
                ...task.subtasks,
                { id: '', description: '', placeholder: '' },
              ],
            })
          }}
        >
          {'+ Add New Subtask'}
        </ButtonSecondary>
        <ColumnSelector
          status={task.status.title}
          changeStatus={handleStatusChange}
          additionalStyling={'mb-24px'}
        />
        <ButtonPrimary type='submit'>Create Task</ButtonPrimary>
      </form>
    </div>
  )
}
