import { createContext, useContext, useReducer } from 'react'
import {
  BoardData,
  BoardAction,
  Payload,
  BoardInterface,
  ColumnInterface,
  SubtaskInterface,
  DataAction,
  TaskInterface,
} from '../interfaces/DataInterfaces'
import { populateBoardObject } from '../utilities/populateBoard'

const BoardDataContext = createContext<BoardData | null>(null)
const BoardDispatchContext = createContext<React.Dispatch<BoardAction> | null>(
  null
)

export const useBoardDataContext = () => {
  const context = useContext(BoardDataContext)
  if (!context)
    throw new Error(
      'BoardDataContext needs to be used within a BoardContextProvider'
    )

  return context
}

export const useBoardDispatchContext = () => {
  const context = useContext(BoardDispatchContext)
  if (!context)
    throw new Error(
      'BoardDispatchContext must be used within a BoardDispatchContext Provider'
    )

  return context
}

export default function StateManagement({
  children,
}: {
  children: JSX.Element
}) {
  const [state, dispatch] = useReducer(reducer, {
    activeBoard: Object.keys(data.boards)[0],
    boards: { ...data.boards },
    columns: { ...data.columns },
    tasks: { ...data.tasks },
    subtasks: { ...data.subtasks },
  })

  return (
    <BoardDataContext.Provider value={state}>
      <BoardDispatchContext.Provider value={dispatch}>
        {children}
      </BoardDispatchContext.Provider>
    </BoardDataContext.Provider>
  )
}

const data: BoardData = populateBoardObject(true)

function reducer(
  state: BoardData,
  action: { type: DataAction; payload: Payload }
): BoardData {
  switch (action.type) {
    case DataAction.setActiveBoard:
      return {
        ...state,
        activeBoard: action.payload.id,
      }

    case DataAction.createBoard: {
      const { id, title } = action.payload as BoardInterface
      return {
        ...state,
        boards: { ...state.boards, [action.payload.id]: { id, title } },
      }
    }

    case DataAction.deleteBoard: {
      const { id } = action.payload as BoardInterface
      let stateCopy = structuredClone(state)
      stateCopy = { ...deleteAssociatedColumns(id, stateCopy) }
      delete stateCopy.boards[id]

      return { ...stateCopy }
    }

    case DataAction.createColumn: {
      const { id, title, boardId } = action.payload as ColumnInterface
      return {
        ...state,
        columns: { ...state.columns, [id]: { id, title, boardId } },
      }
    }

    case DataAction.updateTask: {
      const { id } = action.payload as TaskInterface
      const { tasks } = state
      return {
        ...state,
        tasks: { ...tasks, [id]: { ...tasks[id], ...action.payload } },
      }
    }

    case DataAction.toggleSubtaskComplete: {
      const { id, complete } = action.payload as SubtaskInterface
      const { subtasks } = state
      return {
        ...state,
        subtasks: {
          ...subtasks,
          [id]: { ...subtasks[id], complete: complete },
        },
      }
    }

    default:
      return state
  }
}

export function deleteAssociatedSubtasks(
  taskId: string,
  data: BoardData
): BoardData {
  const clonedData = structuredClone(data)
  const { subtasks } = clonedData

  for (let [key, subtask] of Object.entries<SubtaskInterface>(subtasks)) {
    if (subtask.taskId === taskId) delete subtasks[key]
  }

  return { ...clonedData }
}

export function deleteAssociatedTasks(
  columnId: string,
  data: BoardData
): BoardData {
  let clonedData = structuredClone(data)
  const { tasks } = clonedData
  for (let [key, task] of Object.entries<TaskInterface>(tasks)) {
    if (task.columnId === columnId) {
      clonedData = { ...deleteAssociatedSubtasks(key, clonedData) }
      delete clonedData.tasks[key]
    }
  }

  return { ...clonedData }
}

export function deleteAssociatedColumns(
  boardId: string,
  data: BoardData
): BoardData {
  let clonedData = structuredClone(data)
  const { columns } = clonedData
  for (let [key, column] of Object.entries<ColumnInterface>(columns)) {
    if (column.boardId === boardId) {
      clonedData = { ...deleteAssociatedTasks(key, clonedData) }
      delete clonedData.columns[key]
    }
  }

  return { ...clonedData }
}
