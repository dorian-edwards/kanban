export interface AnimatedButtonProps {
  children: JSX.Element
  text: string
  onClickAction: () => void
  link: boolean
  active?: boolean
}

export interface BoardLinkprops {
  id: string
  title: string
  active: boolean
}

export interface ButtonProps {
  children: string | JSX.Element
  type?: 'button' | 'submit' | 'reset' | undefined
  additionalStyling?: string
  disabled?: boolean
  onClick?: () => void | ((id: string) => void)
}

export interface DynamicInputProps {
  inputType: React.HTMLInputTypeAttribute
  buttonType: 'button' | 'reset' | 'submit' | undefined
  id?: string
  value: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  onClick: () => void
  isSubmitted?: boolean
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
  isSubmitted?: boolean
}

export interface LabelProps {
  children: string | JSX.Element
  htmlFor?: string
}

export interface MobileControlPanelProps {
  turnOverlayOff: () => void
}

export interface MainNavProps {
  sidePanelVisible: boolean
  // activeBoard: Board | null
}

export interface MobileNavProps {
  // activeBoard: Board | null
}

export interface MobileNavMenuProps {
  activeBoardTitle: string
}

export interface OverlayProps {
  children?: JSX.Element
  turnOverlayOff: () => void
  isFullScreen?: boolean
}

export interface SidePanelNavProps {
  turnOverlayOff?: () => void
}
