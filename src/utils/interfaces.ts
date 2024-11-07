export interface ISidebarItemProps {
  active?: boolean
  icon?: React.ReactNode
  path?: string
  text: string
  expanded?: boolean
  subMenu?: ISidebarItemProps[] | null
}
