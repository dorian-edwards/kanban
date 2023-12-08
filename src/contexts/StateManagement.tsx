import { createContext, useContext, useReducer } from 'react'
import {
  BoardData,
  BoardAction,
  Payload,
  BoardInterface,
  ColumnInterface,
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

// const data: Board[] = populateBoardArray(true)

const data: BoardData = populateBoardObject(true)

// New Reducer

function reducer(
  state: BoardData,
  action: { type: string; payload: Payload }
): BoardData {
  switch (action.type) {
    case 'SET_ACTIVE_BOARD':
      return {
        ...state,
        activeBoard: action.payload.id,
      }

    case 'CREATE_BOARD': {
      const { id, title } = action.payload as BoardInterface
      return {
        ...state,
        boards: { ...state.boards, [action.payload.id]: { id, title } },
      }
    }
    case 'CREATE_COLUMN': {
      const { id, title, boardId } = action.payload as ColumnInterface
      return {
        ...state,
        columns: { ...state.columns, [id]: { id, title, boardId } },
      }
    }
    default:
      return state
  }
}
