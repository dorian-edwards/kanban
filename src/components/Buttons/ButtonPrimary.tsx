interface PrimaryButtonInterface {
  text: string | JSX.Element
  type?: 'button' | 'submit' | 'reset' | undefined
  additionalStyling?: string
  disabled?: boolean
  onClick?: () => void | ((id: number) => void)
}

export default function AddTaskButton({
  text,
  type,
  additionalStyling,
  disabled,
  onClick,
}: PrimaryButtonInterface) {
  return (
    <button
      className={`add-task w-full h-[4.8rem] text-center rounded-lg text-white bg-main-purple hover:bg-main-purple-hover disabled:bg-main-purple-disabled ${additionalStyling}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  )
}
