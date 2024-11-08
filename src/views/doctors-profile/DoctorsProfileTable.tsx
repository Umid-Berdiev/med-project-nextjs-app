'use client'
import Table from '@/src/components/Table'
import React, { useState } from 'react'

const DoctorsProfileTable = () => {
  const [sortBy, setSortBy] = useState<
    | {
        column: string
        direction: 'asc' | 'desc'
      }
    | undefined
  >(undefined)

  const handleSort = (column: string) => {
    setSortBy(prev =>
      prev?.column === column
        ? { column, direction: prev.direction === 'asc' ? 'desc' : 'asc' }
        : { column, direction: 'asc' }
    )
  }
  type CellType = {
    name: string
    age: number
  }
  const columns = [
    { header: 'Name', col: (row: CellType) => row.name, sortable: true },
    { header: 'Age', col: (row: CellType) => row.age, sortable: true }
  ]

  const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
  ]

  return (
    <>
      <Table
        columns={columns}
        data={data}
        sortBy={sortBy}
        setSortBy={handleSort}
        hoverable
        stripped
      />
    </>
  )
}

export default DoctorsProfileTable
