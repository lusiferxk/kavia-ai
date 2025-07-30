export interface NavItem {
    title: string
    href?: string
    icon?: string
    items?: NavItem[]
  }
  
  export interface TOCItem {
    id: string
    text: string
    level: number
  }