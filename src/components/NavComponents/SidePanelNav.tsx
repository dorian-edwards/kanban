import BoardIcon from '../icons/BoardIcon'

export default function SidePanelNav() {
  return (
    <div className='side-panel-nav-wrapper'>
      <h2 className='text-xs tracking-wide text-med-gray font-bold mb-[1.2rem] pl-[2.4rem]'>
        {'All Boards (3)'}
      </h2>
      <nav className='side-panel-nav min-w-[24rem]'>
        <ul>
          <li className='text-med-gray'>
            <div className='link-wrapper pl-[2.4rem] rounded-r-xl bg-main-purple text-white py-[1.2rem]'>
              <BoardIcon additionalStyling='mr-[1.2rem]' />
              Platform Launch
            </div>
          </li>
          <li className='text-med-gray'>
            <div className='link-wrapper pl-[2.4rem] rounded-r-xl py-[1.2rem]'>
              <BoardIcon additionalStyling='mr-[1.2rem]' />
              Marketing Plan
            </div>
          </li>
          <li className='text-med-gray'>
            <div className='link-wrapper pl-[2.4rem] rounded-r-xl  py-[1.2rem]'>
              <BoardIcon additionalStyling='mr-[1.2rem]' />
              Roadmap
            </div>
          </li>
          <li className='text-main-purple'>
            <button className='link-wrapper pl-[2.4rem] rounded-r-xl py-[1.2rem] flex items-center'>
              <BoardIcon additionalStyling='mr-[1.2rem]' />
              +&nbsp;&nbsp;Create New Board
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
