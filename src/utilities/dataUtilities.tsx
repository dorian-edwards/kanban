import {
  BoardData,
  BoardInterface,
  ColumnInterface,
  SubtaskInterface,
  TaskInterface,
} from '../interfaces/DataInterfaces'

export function arrayToObject<T extends { id: string; title: string }>(
  data: T[]
): { [key: string]: T } {
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
