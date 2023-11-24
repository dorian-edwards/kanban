import { ButtonInterface } from '../../interfaces'

export default function ButtonSecondary({
  children,
  type,
  additionalStyling,
  disabled,
  onClick,
}: ButtonInterface) {
  return (
    <button
      className={`w-full py-[1.4rem] text-center rounded-lg text-primary-purple bg-secondary-purple hover:bg-secondary-purple-hover disabled:bg-primary-purple-disabled ${additionalStyling}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
