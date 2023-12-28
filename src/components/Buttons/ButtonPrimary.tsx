import { ButtonProps } from '../../interfaces/PropInterfaces'

export default function AddTaskButton({
  children,
  type,
  additionalStyling,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`w-full py-8px text-sm text-center rounded-lg text-white bg-primary-purple hover:bg-primary-purple-hover disabled:bg-lavender dark:disabled:bg-[rgba(99,_95,_199,_0.25)] dark:disabled:text-med-gray ${additionalStyling}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
