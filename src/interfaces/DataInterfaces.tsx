//******* Interfaces for Data Structures *******//
export interface BoardInterface {
  id: string
  title: string
}

export interface ColumnInterface {
  id: string
  title: string
  boardId: string
}

export interface TaskInterface {
  id: string
  title: string
  description: string
  columnId: string
}

export interface SubtaskInterface {
  id: string
  description: string
  complete: boolean
  taskId: string
}

export interface BoardData {
  activeBoard: string
  boards: {
    [key: string]: { id: string; title: string }
  }
  columns: {
    [key: string]: { id: string; title: string; boardId: string }
  }
  tasks: {
    [key: string]: {
      id: string
      title: string
      description: string
      columnId: string
    }
  }
  subtasks: {
    [key: string]: {
      id: string
      description: string
      complete: boolean
      taskId: string
    }
  }
}

export interface BoardAction {
  type: string
  payload: Payload
}

export type Payload =
  | { id: string }
  | BoardInterface
  | ColumnInterface
  | TaskInterface
  | SubtaskInterface
