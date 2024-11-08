import Table from '@/src/app/components/Table'
import React from 'react'

export default function PageComponent() {
  const columns = [
    {
      header: '№',
      width: 'min-w-[50px]',
      col: (row: any, index?: number, meta?: any) =>
        meta ? meta.page * meta.size + (index ?? 0) + 1 : 0
    },
    {
      header: 'col1',
      width: 'min-w-[160px]',
      col: (row: any) => <span>{row.col1}</span>
    }
  ]
  const data = [
    { col1: 'value1' },
    { col1: 'value2' },
    { col1: 'value3' },
    { col1: 'value4' },
    { col1: 'value5' },
    { col1: 'value6' },
    { col1: 'value7' },
    { col1: 'value8' },
    { col1: 'value9' },
    { col1: 'value10' }
  ]
  const meta = { page: 0, size: 10 } // Define the meta variable

  return (
    <>
      <Table data={data} meta={meta} columns={columns} hoverable />
    </>
  )
}
