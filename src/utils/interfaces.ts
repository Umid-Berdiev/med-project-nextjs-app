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
export interface IResponseError {
  response: {
    data: {
      errors: {
        [key: string]: string
      }
    }
  }
}
export interface IUser {
  full_name: string
  birthday: string // ISO format: YYYY-MM-DD
  gender: number // 1 for male, 0 for female (assumption)
  is_assistant: boolean
  is_change_password: boolean
  is_hr_plus: boolean
  look_own_account: boolean
  partner_id: string
  phone: string
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
  filter?: React.ReactNode
}

export interface ITabsProps {
  activeTab: string
  tabContents: ITabContent[]
}

export type DiagnosticsTableCellType = {
  id: number
  name: string
  birthDate: string
  phone: string
  createdAt: string
  doctor: string
  service_count: number
  total_sum: number
  status: string
}

export interface IPrice {
  id: number
  date: string
  state: 'Tasdiqlangan' | 'Tanlanmadi' | 'Bekor qilingan'
  export: string
}
