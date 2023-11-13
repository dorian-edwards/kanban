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

  if (boardLinks.length !== 0) {
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

const data: Board[] = []
