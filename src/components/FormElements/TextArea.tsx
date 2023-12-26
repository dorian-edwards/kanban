import { useEffect, useState } from 'react'
import { TextareaProps } from '../../interfaces/PropInterfaces'

export default function TextArea({
  id,
  value,
  placeholder,
  onChange,
  additionalStyling,
  isSubmitted,
}: TextareaProps) {
  const [hasBeenFocused, setHasBeenFocused] = useState<boolean>(false)
  const [isInvalid, setIsinvalid] = useState<boolean>(false)

  useEffect(() => {
    let result = false
    if (!hasBeenFocused) setIsinvalid(result)

    if (value.length !== 0 && value.trim() === '') result = true

    if (isSubmitted && value.length === 0) result = true
    setIsinvalid(result)
  }, [value, hasBeenFocused, isSubmitted])

  return (
    <div className='relative w-full'>
      <textarea
        id={id}
        className={`relative border text-sm border-cool-gray rounded-sm outline-none w-full px-16px py-[0.8rem] resize-none min-h-[11.2rem] ${
          isInvalid ? 'border-red' : ''
        } ${additionalStyling}`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => setHasBeenFocused(true)}
      />
      {isInvalid ? (
        <small className='absolute right-5 top-[11px] text-red'>
          Can't be empty
        </small>
      ) : null}
    </div>
  )
}
