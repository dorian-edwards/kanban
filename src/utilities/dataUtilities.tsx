import {
  BoardAction,
  BoardData,
  BoardForm,
  BoardInterface,
  ColumnInterface,
  DATA_ACTION,
  SubtaskInterface,
  TaskFormData,
  TaskInterface,
} from '../interfaces/DataInterfaces'
import keyGen from './keyGen'

export function arrayToObject<
  T extends { id: string; title?: string; description?: string }
>(data: T[]): { [key: string]: T } {
  let obj: { [key: string]: T } = {}
  for (let entry of data) {
    obj[entry.id] = entry
  }
  return obj
}

export function extractColumns(
  targetBoardId: string,
  columns: {
    [key: string]: ColumnInterface
  }
): ColumnInterface[] {
  return Object.values(columns).filter(
    ({ boardId }) => boardId === targetBoardId
  )
}

export function extractTasks(
  targetColumnId: string,
  tasks: { [key: string]: TaskInterface }
): TaskInterface[] {
  return Object.values(tasks).filter(
    ({ columnId }) => columnId === targetColumnId
  )
}

export function extractSubtasks(
  targetTaskId: string,
  subtasks: { [key: string]: SubtaskInterface }
): SubtaskInterface[] {
  return Object.values(subtasks).filter(({ taskId }) => taskId === targetTaskId)
}

export function reduceSubtasks(n: number, subtask: SubtaskInterface): number {
  return subtask.complete ? n + 1 : n
}

export function deleteBoard(boardId: string, data: BoardData): BoardData {
  for (let column of Object.values(data.columns)) {
    if (column.boardId === boardId) data = deleteColumn(column.id, data)
  }
  return {
    ...data,
    boards: filter<BoardInterface>(
      data.boards,
      ([key, val]) => val.id !== boardId
    ),
  }
}

export function deleteColumn(columnId: string, data: BoardData): BoardData {
  for (let task of Object.values(data.tasks)) {
    if (task.columnId === columnId) data = deleteTask(task.id, data)
  }

  return {
    ...data,
    columns: filter<ColumnInterface>(
      data.columns,
      ([key, val]) => val.id !== columnId
    ),
  }
}

export function deleteTask(taskId: string, data: BoardData): BoardData {
  return {
    ...data,
    tasks: filter<TaskInterface>(data.tasks, ([key, val]) => val.id !== taskId),
    subtasks: filter<SubtaskInterface>(
      data.subtasks,
      ([key, val]) => val.taskId !== taskId
    ),
  }
}

export function filter<T>(
  collection: { [key: string]: T },
  fxn: (entry: [string, T]) => boolean
): { [key: string]: T } {
  return Object.fromEntries(Object.entries(collection).filter(fxn))
}

export function updateBoard(
  dispatch: React.Dispatch<BoardAction>,
  board: BoardForm,
  preEditColumns: ColumnInterface[]
) {
  const postEditColumns = arrayToObject<{ id: string; title: string }>(
    board.columns
  )

  for (let column of preEditColumns) {
    if (!(column.id in postEditColumns)) {
      dispatch({
        type: DATA_ACTION.DELETE_COLUMN,
        payload: { id: column.id },
      })
    }
  }

  for (let column of board.columns) {
    dispatch({
      type: DATA_ACTION.CREATE_COLUMN,
      payload: { ...column, boardId: board.id },
    })
  }

  dispatch({
    type: DATA_ACTION.UPDATE_BOARD,
    payload: { id: board.id, title: board.title },
  })
}

export function createBoard(
  dispatch: React.Dispatch<BoardAction>,
  board: BoardForm
) {
  const boardId = keyGen('B')

  dispatch({
    type: DATA_ACTION.CREATE_BOARD,
    payload: { id: boardId, title: board.title },
  })

  for (let column of board.columns) {
    dispatch({
      type: DATA_ACTION.CREATE_COLUMN,
      payload: { ...column, id: keyGen('C'), boardId },
    })
  }

  dispatch({
    type: DATA_ACTION.SET_ACTIVE_BOARD,
    payload: { id: boardId },
  })
}

export function createTask(
  dispatch: React.Dispatch<BoardAction>,
  task: TaskFormData
) {
  const taskId = keyGen('T')

  dispatch({
    type: DATA_ACTION.CREATE_TASK,
    payload: {
      id: taskId,
      title: task.title,
      description: task.description,
      columnId: task.status.id,
    },
  })

  task.subtasks.forEach(({ id, description }) => {
    dispatch({
      type: DATA_ACTION.CREATE_SUBTASK,
      payload: {
        id,
        description,
        complete: false,
        taskId,
      },
    })
  })
}

export function updateTask(
  dispatch: React.Dispatch<BoardAction>,
  task: TaskFormData,
  subtasks: {
    [key: string]: {
      id: string
      description: string
      complete: boolean
      taskId: string
    }
  }
) {
  const preEditSubtasks = extractSubtasks(task.id, subtasks) // <- current subtasks associated with taskid
  const postEditSubtasks = arrayToObject(task.subtasks) // <-subtasks in state data

  console.log(task)

  // delete subtasks that are no longer present
  for (let subtask of preEditSubtasks) {
    if (!(subtask.id in postEditSubtasks)) {
      dispatch({
        type: DATA_ACTION.DELETE_SUBTASK,
        payload: { id: subtask.id },
      })
    }
  }

  for (let subtask of task.subtasks) {
    dispatch({
      type: DATA_ACTION.CREATE_SUBTASK,
      payload: { ...subtask, taskId: task.id },
    })
  }

  dispatch({
    type: DATA_ACTION.UPDATE_TASK,
    payload: {
      id: task.id,
      title: task.title,
      description: task.description,
      columnId: task.status.id,
    },
  })
}
