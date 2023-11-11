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
