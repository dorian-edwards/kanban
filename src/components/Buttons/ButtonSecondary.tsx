import { ButtonProps } from '../../interfaces/PropInterfaces'

export default function ButtonSecondary({
  children,
  type,
  additionalStyling,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`w-full py-8px text-sm text-center rounded-lg text-primary-purple bg-secondary-purple hover:bg-secondary-purple-hover dark:bg-white dark:hover:bg-white disabled:bg-primary-purple-disabled ${additionalStyling}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
