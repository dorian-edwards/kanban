import { SubTask } from '../interfaces'

export default function reduceSubTasks(n: number, subtask: SubTask): number {
  return subtask.complete ? n + 1 : n
}
