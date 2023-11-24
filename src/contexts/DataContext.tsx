import { useContext, createContext, useState } from 'react'
import { Board, BoardData, BoardLinkData } from '../interfaces'

const DataContext = createContext<BoardData | null>(null)

export default function DataContextProvider({
  children,
}: {
  children: JSX.Element
}) {
  const [activeBoard, setActiveBoard] = useState<Board | null>(
    data.length === 0 ? null : data[0]
  )

  let boardLinks: BoardLinkData[] = []

  if (data.length !== 0) {
    boardLinks = data.map((board) => ({ id: board.id, title: board.title }))
  }

  function updateActiveBoard(id: number): void {
    const board = data.filter((b) => b.id === id)[0]

    if (!board) return
    setActiveBoard(board)
  }

  return (
    <DataContext.Provider
      value={{ boardLinks, activeBoard, updateActiveBoard }}
    >
      {children}
    </DataContext.Provider>
  )
}

export function useDataContext() {
  const context = useContext(DataContext)
  if (!context) throw new Error('Must use data context within a data provider')
  return context
}
const data: Board[] = populateBoard(true)

function populateBoard(populate: boolean): Board[] {
  return !populate
    ? []
    : [
        {
          id: 1,
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
          id: 2,
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
