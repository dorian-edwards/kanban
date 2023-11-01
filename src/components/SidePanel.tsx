import ControlPanel from './ControlPanel'
import SidePanelNav from './SidePanelNav'

export default function SidePanel({
  sidePanelVisible,
}: {
  sidePanelVisible: boolean
}) {
  return (
    <section
      className={`side-panel h-[calc(100vh-8.6rem)] flex flex-col justify-between pb-[4.6rem] pt-[2.6rem] bg-white overflow-x-hidden z-50 transition-[width,_padding] duration-1000 whitespace-nowrap ${
        sidePanelVisible ? 'w-[26rem] pr-[2.4rem] border-r-[1px]' : 'w-0'
      } border-lavender`}
    >
      <SidePanelNav />
      <ControlPanel />
    </section>
  )
}
