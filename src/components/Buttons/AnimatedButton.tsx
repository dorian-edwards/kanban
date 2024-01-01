import { AnimatedButtonProps } from '../../interfaces/PropInterfaces'

export default function AnimatedButton({
  children,
  text,
  onClickAction,
  active,
}: AnimatedButtonProps) {
  return (
    <button
      className={`animated-button relative w-[24rem] desktop:w-[27.6rem] group pl-24px h-[4.8rem] rounded-r-xl flex items-center ${
        active
          ? 'bg-primary-purple text-white'
          : 'relative before:content-[""] before:absolute before:w-0 before:h-full before:bg-[rgba(99,_95,_199,_0.1)] before:rounded-r-xl before:left-[-2rem] before:ml-[2rem] before:z-[-1] dark:before:bg-white before:hover:w-full before:transition-[width] before:duration-500'
      }`}
      onClick={onClickAction}
    >
      {children}
      <span
        className={`ml-[1rem] overflow-x-scroll transition-colors duration-500 ${
          active
            ? 'text-white'
            : 'text-med-gray group-hover:text-primary-purple'
        }`}
      >
        {text}
      </span>
    </button>
  )
}
