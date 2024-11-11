export interface ISidebarItemProps {
  active?: boolean
  icon?: React.ReactNode
  path?: string
  text: string
  expanded?: boolean
  subMenu?: ISidebarItemProps[] | null
}
export interface IPagination {
  page: number
  size: number
  totalCount?: number
  pageCount?: number
}
export interface ITabContentList {
  id: string
  content: React.ReactElement
  label: string
}

export interface ITab {
  id: string
  label: string
}

export interface ITabContent {
  id: string
  content: React.ReactNode
}

export interface ITablistProps {
  tabs: ITab[]
  activeTab: string
  onTabClick: (id: string) => void
  activeColor?: string
  bgColor?: string
  className?: string
  variant?: 'standart' | 'fullWidth'
}

export interface ITabsProps {
  activeTab: string
  tabContents: ITabContent[]
}
