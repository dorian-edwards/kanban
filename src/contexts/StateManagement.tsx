import { createContext, useContext, useReducer } from 'react'
import { Board } from '../interfaces'

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

export interface BoardPayload {
  id?: string
  title?: string
}

export interface BoardAction {
  type: string
  payload: BoardPayload
}

export interface BoardData {
  activeBoard: Board | null
  boards: Board[]
}

const data: Board[] = populateBoard(true)

function populateBoard(populate: boolean): Board[] {
  return !populate
    ? []
    : [
        {
          id: '1',
          title: 'Platform Launch',
          columns: [
            {
              title: 'Column 1',
              tasks: [
                {
                  id: 1,
                  title: 'Task 1',
                  description: 'Task 1 Description',
                  subtasks: [
                    {
                      id: 1,
                      description: 'SubTask 1',
                      complete: true,
                    },
                    {
                      id: 2,
                      description: 'SubTask 2',
                      complete: false,
                    },
                  ],
                },
                {
                  id: 2,
                  title: 'Task 2',
                  description: 'Task 2 Description',
                  subtasks: [
                    {
                      id: 3,
                      description: 'SubTask 3',
                      complete: false,
                    },
                  ],
                },
              ],
            },
            {
              title: 'Column 2',
              tasks: [
                {
                  id: 3,
                  title: 'Task 3',
                  description: 'Task 3 Description',
                  subtasks: [
                    {
                      id: 4,
                      description: 'SubTask 4',
                      complete: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: '2',
          title: 'Marketing',
          columns: [
            {
              title: 'Column 1',
              tasks: [
                {
                  id: 4,
                  title: 'Task 4',
                  description: 'Task 4 Description',
                  subtasks: [
                    {
                      id: 5,
                      description: 'SubTask 5',
                      complete: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ]
}

function boardReducer(
  state: BoardData,
  action: { type: string; payload: { id?: string; title?: string } }
): BoardData {
  switch (action.type) {
    case 'SET_ACTIVE':
      return {
        ...state,
        activeBoard: state.boards.filter(
          (board) => board.id === action.payload.id
        )[0],
      }
    default:
      return state
  }
}
