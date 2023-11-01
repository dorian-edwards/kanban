import ControlPanel from './ControlPanel'
import SidePanelNav from './SidePanelNav'

export default function SidePanel({
  sidePanelVisible,
}: {
  sidePanelVisible: boolean
}) {
  return (
    <section
      className={`side-panel h-[calc(100vh-8.2rem)] flex flex-col justify-between pb-[4.6rem] pt-[2.6rem] bg-white overflow-x-hidden transition-[width,_padding] duration-1000 whitespace-nowrap ${
        sidePanelVisible ? 'w-[26rem] pr-[2.4rem]' : 'w-0'
      } border-r-[1px] border-lavender`}
    >
      <SidePanelNav />
      <ControlPanel />
    </section>
  )
}
