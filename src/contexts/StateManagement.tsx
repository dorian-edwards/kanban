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
import {
  deleteBoard,
  deleteColumn,
  deleteTask,
} from '../utilities/dataUtilities'
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
  const stateCopy = structuredClone(state)

  switch (action.type) {
    case DATA_ACTION.SET_ACTIVE_BOARD:
      return {
        ...stateCopy,
        activeBoard: action.payload.id,
      }

    case DATA_ACTION.CREATE_BOARD: {
      const { id, title } = action.payload as BoardInterface
      return {
        ...stateCopy,
        boards: { ...stateCopy.boards, [id]: { id, title } },
      }
    }

    case DATA_ACTION.UPDATE_BOARD: {
      const { id, title } = action.payload as BoardInterface
      return {
        ...stateCopy,
        boards: { ...stateCopy.boards, [id]: { id, title } },
      }
    }

    case DATA_ACTION.DELETE_BOARD: {
      const updatedData = deleteBoard(action.payload.id, stateCopy)
      return {
        ...updatedData,
        activeBoard: Object.keys(updatedData.boards)[0],
      }
    }

    case DATA_ACTION.CREATE_COLUMN: {
      const { id, title, boardId } = action.payload as ColumnInterface
      return {
        ...stateCopy,
        columns: { ...stateCopy.columns, [id]: { id, title, boardId } },
      }
    }

    case DATA_ACTION.DELETE_COLUMN: {
      const { id } = action.payload as ColumnInterface
      return deleteColumn(id, stateCopy)
    }

    case DATA_ACTION.CREATE_TASK: {
      const { id } = action.payload
      const { tasks } = stateCopy
      return {
        ...stateCopy,
        tasks: { ...tasks, [id]: { ...(action.payload as TaskInterface) } },
      }
    }

    case DATA_ACTION.UPDATE_TASK: {
      const { id } = action.payload as TaskInterface
      const { tasks } = stateCopy
      return {
        ...stateCopy,
        tasks: { ...tasks, [id]: { ...tasks[id], ...action.payload } },
      }
    }

    case DATA_ACTION.DELETE_TASK: {
      const { id } = action.payload as TaskInterface
      return deleteTask(id, stateCopy)
    }

    case DATA_ACTION.CREATE_SUBTASK: {
      const { id } = action.payload
      const { subtasks } = stateCopy
      return {
        ...stateCopy,
        subtasks: {
          ...subtasks,
          [id]: { ...(action.payload as SubtaskInterface) },
        },
      }
    }

    case DATA_ACTION.DELETE_SUBTASK: {
      const { id } = action.payload
      const { subtasks } = stateCopy
      return {
        ...stateCopy,
        subtasks: Object.fromEntries(
          Object.entries(subtasks).filter(
            ([key, val]) => (val as SubtaskInterface).id !== id
          )
        ),
      }
    }

    case DATA_ACTION.UPDATE_SUBTASK: {
      const { id } = action.payload
      const { subtasks } = stateCopy
      return {
        ...stateCopy,
        subtasks: {
          ...subtasks,
          [id]: action.payload as SubtaskInterface,
        },
      }
    }

    case DATA_ACTION.TOGGLE_SUBTASK_COMPLETE: {
      const { id, complete } = action.payload as SubtaskInterface
      const { subtasks } = stateCopy
      return {
        ...stateCopy,
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
