import {
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
