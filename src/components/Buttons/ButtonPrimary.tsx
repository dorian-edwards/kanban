interface PrimaryButtonInterface {
  text: string | JSX.Element
  additionalStyling?: string
  disabled?: boolean
  onClick?: () => void | ((id: number) => void)
}

export default function AddTaskButton({
  text,
  additionalStyling,
  disabled,
  onClick,
}: PrimaryButtonInterface) {
  return (
    <button
      className='add-task w-[16.4rem] h-[4.8rem] text-center rounded-lg text-white bg-main-purple hover:bg-main-purple-hover disabled:bg-main-purple-disabled'
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
