export interface AnimatedButtonProps {
  children: JSX.Element
  text: string
  onClickAction: () => void
  link: boolean
  active?: boolean
}

export interface Board {
  id: number
  title: string
  columns: Column[]
}

export interface BoardData {
  boardLinks: BoardLinkData[]
  activeBoard: Board | null
  updateActiveBoard: (n: number) => void
}

export interface BoardInfo {
  title: string
  columns: ColumnInfo[]
}

export interface BoardLinkData {
  id: number
  title: string
}

export interface BoardLinkprops {
  id: number
  title: string
  active: boolean
  update: (n: number) => void
}

export interface ButtonProps {
  children: string | JSX.Element
  type?: 'button' | 'submit' | 'reset' | undefined
  additionalStyling?: string
  disabled?: boolean
  onClick?: () => void | ((id: number) => void)
}

export interface Column {
  title: string
  tasks: Task[]
}

export interface ColumnInfo {
  id: string
  title: string
}

export interface DynamicInputProps {
  inputType: React.HTMLInputTypeAttribute
  buttonType: 'button' | 'reset' | 'submit' | undefined
  id?: string
  value: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  onClick: () => void
}

export interface IconProps {
  additionalStyling?: string
  active?: boolean
  pathStyling?: string
}

export interface InputProps {
  type: React.HTMLInputTypeAttribute
  id?: string
  value: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  additionalStyling?: string
}

export interface LabelProps {
  children: string | JSX.Element
  htmlFor?: string
}

export interface MobileControlPanelProps {
  turnOverlayOff: () => void
}

export interface MobileEditProps {
  activeBoard: Board | null
  setFullScreen: (b: boolean) => void
  setOverlayActive: (b: boolean) => void
}

export interface MainNavProps {
  sidePanelVisible: boolean
  activeBoard: Board | null
}

export interface MobileNavProps {
  activeBoard: Board | null
}

export interface MobileNavMenuProps {
  activeBoardTitle: string
  overlayActive: boolean
  setFullScreen: (b: boolean) => void
  setOverlayActive: (b: boolean) => void
  fullScreenActive: boolean
}

export interface OverlayProps {
  children?: JSX.Element
  turnOverlayOff: () => void
  isFullScreen?: boolean
}

export interface SidePanelNavProps {
  turnOverlayOff?: () => void
}

export interface SubTask {
  id: number
  description: string
  complete: boolean
}

export interface Task {
  id: number
  title: string
  description: string
  subtasks: SubTask[]
}
