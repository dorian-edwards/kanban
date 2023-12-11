import { ButtonProps } from '../../interfaces/PropInterfaces'

export default function ButtonDelete({
  children,
  type,
  additionalStyling,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`w-full py-8px text-sm text-center rounded-lg text-white bg-red hover:bg-red-hover disabled:bg-med-gray ${additionalStyling}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
