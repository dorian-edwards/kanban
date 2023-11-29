import { useEffect, useState } from 'react'
import { InputProps } from '../../../interfaces'

export default function Input({
  type,
  id,
  value,
  onChange,
  additionalStyling,
  isSubmitted,
}: InputProps) {
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
      <input
        type={type}
        id={id}
        className={`relative border border-cool-gray rounded-sm outline-none w-full pl-[1.6rem] py-[0.8rem] ${
          isInvalid ? 'border-red' : ''
        } ${additionalStyling}`}
        value={value}
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
