import ControlPanel from './ControlPanel'
import SidePanelNav from './SidePanelNav'

export default function SidePanel({
  sidePanelVisible,
}: {
  sidePanelVisible: boolean
}) {
  return (
    <section
      className={`side-panel flex flex-col justify-between shrink-0 pb-[4.6rem] pt-[2.6rem] bg-white dark:bg-dark-gray overflow-x-hidden z-50 transition-all duration-333 whitespace-nowrap  ${
        sidePanelVisible ? 'w-[26rem] desktop:w-[30rem] border-r-[1px]' : 'w-0'
      } border-lavender dark:border-lines-dark`}
    >
      <SidePanelNav />
      <ControlPanel />
    </section>
  )
}
