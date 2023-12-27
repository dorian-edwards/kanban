import { LabelProps } from '../../interfaces/PropInterfaces'

export default function Label({ children, htmlFor }: LabelProps) {
  return (
    <label
      className='mb-[0.8rem] block font-bold text-xs text-med-gray dark:text-white'
      htmlFor={htmlFor}
    >
      {children}
    </label>
  )
}
