import ShowIcon from '../icons/ShowIcon'

export default function ShowSidePanel({
  showSidePanel,
}: {
  showSidePanel: () => void
}) {
  return (
    <button
      className='absolute pl-[2rem] flex items-center rounded-r-xl w-[5.6rem] h-[4.8rem] bottom-[4.6rem] left-0 bg-main-purple hover:bg-main-purple-hover'
      onClick={showSidePanel}
    >
      <ShowIcon />
    </button>
  )
}
