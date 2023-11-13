export interface AnimatedButtonProps {
  children: JSX.Element
  text: string
  onClickAction: () => void
  link: boolean
  active?: boolean
}

export interface Board {
  id: number
  title: string
  columns: Column[]
}

export interface BoardData {
  boardLinks: BoardLinkData[]
  activeBoard: Board | null
  updateActiveBoard: (n: number) => void
}

export interface BoardLinkData {
  id: number
  title: string
}

export interface BoardLinkprops {
  id: number
  title: string
  active: boolean
  update: (n: number) => void
}

export interface Column {
  title: string
  tasks: Task[]
}

export interface LayoverProps {
  children?: JSX.Element
  turnLayoverOff: () => void
  mobile: boolean
}

export interface MainNavProps {
  sidePanelVisible: boolean
  activeBoard: Board | null
}

export interface SubTask {
  id: number
  description: string
  complete: boolean
}

export interface Task {
  id: number
  title: string
  description: string
  subtasks: SubTask[]
}
