//******* Interfaces for Data Structures *******//
export interface BoardInterface {
  id: string
  title: string
}

export interface BoardForm {
  id: string
  title: string
  columns: { id: string; title: string }[]
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
  type: DATA_ACTION
  payload: Payload
}

export enum DATA_ACTION {
  // set active board
  SET_ACTIVE_BOARD,
  // BOARD ACTIONS
  CREATE_BOARD,
  UPDATE_BOARD,
  DELETE_BOARD,
  // COLUMN ACTIONS
  CREATE_COLUMN,
  UPDATE_COLUMN,
  DELETE_COLUMN,
  // TASK ACTIONS
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  // SUBTASK ACTIONS
  CREATE_SUBTASK,
  UPDATE_SUBTASK,
  DELETE_SUBTASK,
  TOGGLE_SUBTASK_COMPLETE,
}

export type Payload =
  | { id: string }
  | BoardInterface
  | ColumnInterface
  | TaskInterface
  | SubtaskInterface

export enum EditType {
  board = 'Board',
  task = 'Task',
}

export interface TaskFormData {
  id: string
  title: string
  description: string
  subtasks: { id: string; description: string; placeholder?: string }[]
  status: { title: string; id: string }
}
