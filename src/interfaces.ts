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

export interface Board {
  id: number
  title: string
  columns: Column[]
}

export interface Column {
  title: string
  tasks: Task[]
}
