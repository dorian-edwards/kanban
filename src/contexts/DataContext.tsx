import { useContext, createContext, useState } from 'react'
import data from '../data.json'
import { Board } from '../interfaces'

const DataContext = createContext<BoardData | null>(null)

export default function DataContextProvider({
  children,
}: {
  children: JSX.Element
}) {
  const [activeBoard, setActiveBoard] = useState<Board>(data[0])
  const boardLinks = data.map((board) => ({ id: board.id, title: board.title }))

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

export interface BoardLinkData {
  id: number
  title: string
}

export interface BoardData {
  boardLinks: BoardLinkData[]
  activeBoard: Board
  updateActiveBoard: (n: number) => void
}
