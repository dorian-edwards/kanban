import BoardIcon from '../icons/BoardIcon'

export default function CreateBoardButton() {
  return (
    <button className='link-wrapper pl-[2.4rem] rounded-r-xl py-[1.2rem] flex items-center'>
      <BoardIcon
        additionalStyling='mr-[1.2rem]'
        pathStyling='fill-main-purple'
      />
      {'+  Create New Board'}
    </button>
  )
}
