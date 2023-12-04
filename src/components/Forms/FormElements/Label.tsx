import { LabelProps } from '../../../interfaces'

export default function Label({ children, htmlFor }: LabelProps) {
  return (
    <label
      className='mb-[0.8rem] block font-bold text-xs text-med-gray'
      htmlFor={htmlFor}
    >
      {children}
    </label>
  )
}
