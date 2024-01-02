import { FormEvent, useState } from 'react'
import {
  useBoardDataContext,
  useBoardDispatchContext,
} from '../../contexts/StateManagement'
import { useOverlayContext } from '../../contexts/OverlayContext'
import { TaskFormData, TaskInterface } from '../../interfaces/DataInterfaces'
import keyGen from '../../utilities/keyGen'
import { createTask, updateTask } from '../../utilities/dataUtilities'
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
    <div className='bg-white dark:bg-dark-gray  p-24px rounded-sm mx-[16px] transition-colors duration-333'>
      <form onSubmit={handleSubmit}>
        <h2 className='task-form-title mb-24px font-bold text-18px dark:text-white'>
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
