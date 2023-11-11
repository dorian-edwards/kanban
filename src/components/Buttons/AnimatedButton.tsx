import { AnimatedButtonProps } from '../../interfaces'

export default function AnimatedButton({
  children,
  text,
  onClickAction,
  active,
}: AnimatedButtonProps) {
  return (
    <button
      className={`group pl-[2.4rem] w-[27.6rem] h-[4.8rem] rounded-r-xl flex items-center ${
        active
          ? 'bg-main-purple text-white'
          : 'relative before:content-[""] before:absolute before:w-0 before:h-full before:bg-[rgba(99,_95,_199,_0.1)] before:rounded-r-xl before:left-[-2rem] before:ml-[2.4rem] before:z-[-1] before:hover:w-full before:transition-[width] before:duration-1000'
      }`}
      onClick={onClickAction}
    >
      {children}
      <span
        className={`ml-[1rem] ${
          active ? 'text-white' : 'text-med-gray group-hover:text-main-purple'
        }`}
      >
        {text}
      </span>
    </button>
  )
}
