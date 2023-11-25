import { InputProps } from '../../../interfaces'

export default function Input({
  type,
  id,
  value,
  onChange,
  additionalStyling,
}: InputProps) {
  return (
    <input
      type={type}
      id={id}
      className={`border border-cool-gray rounded-sm outline-none w-full pl-[1.6rem] py-[0.8rem] ${additionalStyling}`}
      value={value}
      onChange={onChange}
    />
  )
}
