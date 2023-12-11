import { createContext, useContext, useReducer } from 'react'
import {
  BoardData,
  BoardAction,
  Payload,
  BoardInterface,
  ColumnInterface,
  SubtaskInterface,
  DATA_ACTION,
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
  action: { type: DATA_ACTION; payload: Payload }
): BoardData {
  switch (action.type) {
    case DATA_ACTION.SET_ACTIVE_BOARD:
      return {
        ...state,
        activeBoard: action.payload.id,
      }

    case DATA_ACTION.CREATE_BOARD: {
      const { id, title } = action.payload as BoardInterface
      return {
        ...state,
        boards: { ...state.boards, [action.payload.id]: { id, title } },
      }
    }

    case DATA_ACTION.UPDATE_BOARD: {
      const { id, title } = action.payload as BoardInterface
      const { boards } = state
      return { ...state, boards: { ...boards, [id]: { id, title } } }
    }

    case DATA_ACTION.DELETE_BOARD: {
      const { id } = action.payload as BoardInterface
      let stateCopy = structuredClone(state)
      stateCopy = { ...deleteAssociatedColumns(id, stateCopy) }
      delete stateCopy.boards[id]

      return { ...stateCopy, activeBoard: Object.keys(stateCopy.boards)[0] }
    }

    case DATA_ACTION.CREATE_COLUMN: {
      const { id, title, boardId } = action.payload as ColumnInterface
      return {
        ...state,
        columns: { ...state.columns, [id]: { id, title, boardId } },
      }
    }

    case DATA_ACTION.DELETE_COLUMN: {
      const { id } = action.payload as ColumnInterface
      let stateCopy = structuredClone(state)
      stateCopy = deleteAssociatedTasks(id, state)
      delete stateCopy.columns[id]

      return { ...stateCopy }
    }

    case DATA_ACTION.UPDATE_TASK: {
      const { id } = action.payload as TaskInterface
      const { tasks } = state
      return {
        ...state,
        tasks: { ...tasks, [id]: { ...tasks[id], ...action.payload } },
      }
    }

    case DATA_ACTION.TOGGLE_SUBTASK_COMPLETE: {
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
