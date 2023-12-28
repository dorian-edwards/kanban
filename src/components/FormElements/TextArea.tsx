import { TextareaProps } from '../../interfaces/PropInterfaces'

export default function TextArea({
  id,
  value,
  placeholder,
  onChange,
  additionalStyling,
  isSubmitted,
}: TextareaProps) {
  return (
    <div className='relative w-full'>
      <textarea
        id={id}
        className={`relative border text-sm dark:text-white border-cool-gray rounded-sm outline-none w-full px-16px py-[0.8rem] resize-none min-h-[11.2rem] ${additionalStyling}`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}
