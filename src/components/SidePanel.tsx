export default function SidePanel({
  sidePanelVisible,
}: {
  sidePanelVisible: boolean
}) {
  return (
    <nav
      className={`side-panel h-[calc(100vh-8.2rem)] bg-white overflow-x-hidden transition-[width] duration-1000 whitespace-nowrap ${
        sidePanelVisible ? 'w-[26rem]' : 'w-0'
      } border-r-[1px] border-lavendar`}
    >
      Side Nav
    </nav>
  )
}
