import { useState } from 'react'
import CheckMark from './icons/Check'
import { SubTask } from '../interfaces'

interface SubTaskCardProps {
  subtask: SubTask
}

// Todo Add props
export default function SubTaskCard({ subtask }: SubTaskCardProps) {
  // Replace with prop
  // Will need dispatch to toggle state
  const [complete, setComplete] = useState<boolean>(false)

  return (
    <button
      className='subtask-card bg-lgt-gray py-12px pl-12px pr-16px flex gap-16px items-center rounded-sm w-full'
      onClick={() => setComplete((prev) => !prev)}
    >
      <div
        className={`h-16px w-16px shrink-0 border border-cool-gray flex justify-center items-center rounded-xs ${
          complete ? 'bg-primary-purple' : 'bg-white'
        }`}
      >
        {complete ? <CheckMark /> : null}
      </div>
      <p
        className={`text-xs font-bold ${
          complete ? 'opacity-[0.5] line-through' : ''
        }`}
      >
        {subtask.description}
      </p>
    </button>
  )
}
