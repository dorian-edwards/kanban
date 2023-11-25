import { LabelProps } from '../../../interfaces'

export default function Label({ children, htmlFor }: LabelProps) {
  return (
    <label
      className='mb-[0.8rem] block font-bold text-[1.2rem] text-med-gray'
      htmlFor={htmlFor}
    >
      {children}
    </label>
  )
}
