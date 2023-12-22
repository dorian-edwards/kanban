import { DynamicInputProps } from '../../interfaces/PropInterfaces'
import CrossIcon from '../icons/CrossIcon'
import Input from './Input'

export default function DynamicInput({
  inputType,
  buttonType,
  id,
  value,
  placeholder,
  onChange,
  onClick,
  isSubmitted,
}: DynamicInputProps) {
  return (
    <div className='flex gap-16px mb-12px'>
      <Input
        type={inputType}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        isSubmitted={isSubmitted}
      />
      <button onClick={onClick} type={buttonType}>
        <CrossIcon />
      </button>
    </div>
  )
}
