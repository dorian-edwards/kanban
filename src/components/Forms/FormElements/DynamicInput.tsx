import { DynamicInputProps } from '../../../interfaces'
import CrossIcon from '../../icons/CrossIcon'
import Input from './Input'

export default function DynamicInput({
  inputType,
  buttonType,
  id,
  value,
  onChange,
  onClick,
}: DynamicInputProps) {
  return (
    <div className='flex gap-[1.6rem] mb-[1.2rem]'>
      <Input type={inputType} id={id} value={value} onChange={onChange} />
      <button onClick={onClick} type={buttonType}>
        <CrossIcon />
      </button>
    </div>
  )
}
