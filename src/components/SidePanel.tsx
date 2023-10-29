import BoardIcon from './icons/BoardIcon'

export default function SidePanel({
  sidePanelVisible,
}: {
  sidePanelVisible: boolean
}) {
  return (
    <section
      className={`side-panel h-[calc(100vh-8.2rem)] flex flex-col justify-between pb-[4.6rem] pt-[2.6rem] bg-white overflow-x-hidden transition-[width,_padding] duration-1000 whitespace-nowrap ${
        sidePanelVisible ? 'w-[26rem] pr-[2.4rem]' : 'w-0'
      } border-r-[1px] border-lavendar`}
    >
      <div className='side-panel-top'>
        <h2 className='text-xs tracking-wide text-med-gray font-bold mb-[1.2rem] pl-[2.4rem]'>
          {'All Boards (3)'}
        </h2>
        <nav className='min-width-[23.5rem]'>
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
      <div className='control-panel'>Buttons</div>
    </section>
  )
}
