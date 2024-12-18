interface ITemplate {
  id: number
  name: string
  date: string
  category: Category[]
}

interface Category {
  
}
export const tableData: ITemplate[] = [
  {
    id: 1,
    name: 'Shablon 1',
    date: '01.01.2024',
    category: ['Gruppa','Qon ivish vaqti, Lipidniy spektor']
  },
  {
    id: 2,
    name: 'Shablon 1',
    date: '01.01.2024',
    category: ['Gruppa','Qon ivish vaqti, Lipidniy spektor']
  },
  {
    id: 3,
    name: 'Shablon 1',
    date: '01.01.2024',
    category: ['Gruppa','Qon ivish vaqti, Lipidniy spektor']
  },
  {
    id: 4,
    name: 'Shablon 1',
    date: '01.01.2024',
    category: ['Gruppa','Qon ivish vaqti, Lipidniy spektor']
  },
]
