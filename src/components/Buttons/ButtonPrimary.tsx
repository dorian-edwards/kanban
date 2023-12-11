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
      className={`w-full py-8px text-sm text-center rounded-lg text-white bg-primary-purple hover:bg-primary-purple-hover disabled:bg-lavender ${additionalStyling}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
