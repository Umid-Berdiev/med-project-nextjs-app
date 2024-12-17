import AppInput from '@/src/components/forms/AppInput'
import AppInputCheckbox from '@/src/components/forms/AppInputCheckbox'
import AppInputCheckboxNoLabel from '@/src/components/forms/AppInputCheckboxNoLabel'
import AppLabel from '@/src/components/forms/AppLabel'
import AppSelect from '@/src/components/forms/AppSelect'
import Modal from '@/src/components/Modal'
import Table, { ITableColumn } from '@/src/components/table/Table'
import Heading5 from '@/src/components/typography/Heading5'
import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import { useParams } from 'next/navigation'
import React from 'react'

export default function DiagnosticTable() {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
  const [open, setOpen] = React.useState(false)
  type CellType = {
    id: number
    name: string
    department: string

    createdAt: string
    doctor: string
  }
  const columns: ITableColumn<CellType>[] = [
    {
      header: t('Xizmat nomi'),
      col: (row: CellType) => (
        <div className='flex items-center gap-2'>
          <AppInputCheckboxNoLabel isChecked={false} />
          <span className='text-secondary' onClick={() => setOpen(true)}>
            {row.name}
          </span>
        </div>
      ),
      sortable: true
    },
    {
      header: t('Bo’lim nomi'),

      col: (row: CellType) => row.department,
      sortable: true
    },

    {
      header: t('Yuborilgan sana'),
      width: 'w-48',

      col: (row: CellType) => row.createdAt,
      sortable: true
    },
    {
      header: t('Yuborgan doktor'),
      col: (row: CellType) => row.doctor,
      sortable: true
    }
  ]
  const data: CellType[] = [
    {
      id: 1,
      name: 'Fibrinogen',
      department: 'Statsionar',

      createdAt: '2023-01-01',
      doctor: 'Abduvahhobov Abdulbosit Abduvohidovich'
    },
    {
      id: 2,
      name: 'Fibrinogen',
      department: 'Statsionar',

      createdAt: '2023-02-01',
      doctor: 'Abduvahhobov Abdulbosit Abduvohidovich'
    }
  ]
  const classRow = (row: CellType) => {
    return row.id % 3 == 0 ? 'bg-softError ' : 'bg-softSuccess'
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex flex-col gap-2'>
        <Heading5>{t('Dignostika')}</Heading5>
        <Table
          columns={columns}
          data={data}
          classRow={classRow}
          hoverable={false}
          stripped={false}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <Heading5>{t('Statsionar')}</Heading5>
        <Table
          columns={columns}
          data={data}
          classRow={classRow}
          hoverable={false}
          stripped={false}
        />
      </div>
      <Modal
        bg='bg-background'
        title='Diagnostika natijalari'
        open={open}
        size='lg'
        onClose={handleClose}
      >
        <div className='flex flex-col gap-3'>
          <AppLabel text='Shablon turi' isRequired />
          <AppSelect options={[]} placeholder='Shablon turi' />
        </div>
      </Modal>
    </div>
  )
}
