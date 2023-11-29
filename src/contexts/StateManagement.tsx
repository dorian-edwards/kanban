import { createContext, useContext, useReducer } from 'react'
import { Board, BoardAction, BoardData, BoardPayload } from '../interfaces'
import populateBoard from '../utilities/PopulateBoard'

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
  const [state, dispatch] = useReducer(boardReducer, {
    activeBoard: data[0] || null,
    boards: data,
  })

  return (
    <BoardDataContext.Provider value={state}>
      <BoardDispatchContext.Provider value={dispatch}>
        {children}
      </BoardDispatchContext.Provider>
    </BoardDataContext.Provider>
  )
}

const data: Board[] = populateBoard(true)

function boardReducer(
  state: BoardData,
  action: { type: string; payload: Payload }
): BoardData {
  switch (action.type) {
    case 'SET_ACTIVE':
      return {
        ...state,
        activeBoard: state.boards.filter(
          (board) => board.id === action.payload.id
        )[0],
      }

    case 'CREATE_BOARD':
      console.log(action.payload)
      return {
        ...state,
        boards: [...state.boards, { ...(action.payload as Board) }],
      }
    default:
      return state
  }
}

type Payload = Board | BoardPayload
