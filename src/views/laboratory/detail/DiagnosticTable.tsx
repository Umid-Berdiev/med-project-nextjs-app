import RoundedBlock from '@/src/components/blocks/RoundedBlock'
import Button from '@/src/components/Button'
import CustomEditor from '@/src/components/CustomEditor'
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
import { FaFileAlt } from 'react-icons/fa'

export default function DiagnosticTable() {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)
  const [open, setOpen] = React.useState(false)
  const [editor, setEditor] = React.useState(false)
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
  type CellModalType = {
    id: number
    name: string
    result: string
    norma: string
    unit: string
  }
  const classRowModal = (row: CellModalType) => {
    return row.id % 3 == 0 ? 'bg-softError ' : 'bg-softSuccess'
  }
  const columnModal: ITableColumn<CellModalType>[] = [
    {
      header: t('Nomi'),
      col: (row: CellModalType) => row.name,
      sortable: true
    },
    {
      header: t('Natija'),
      col: (row: CellModalType) => <AppInput defaultValue={row.result} />,
      sortable: true
    },
    {
      header: t('Norma'),
      col: (row: CellModalType) => (
        <div className='w-full'>
          <AppInput defaultValue={row.norma} />
        </div>
      ),
      sortable: true,
      width: 'min-w-96'
    },
    {
      header: t('Birlik'),
      col: (row: CellModalType) => <AppInput defaultValue={row.unit} />,
      sortable: true
    }
  ]
  const dataModal: CellModalType[] = [
    {
      id: 1,
      name: 'ALT',
      result: '4.5',
      norma: 'Erkaklar 10 yosh- 100 yil 0-42  Ayollar 10 yosh- 100 yil 0-32',
      unit: 'g/l'
    },
    {
      id: 2,
      name: 'ALT',
      result: '4.5',
      norma: 'Erkaklar 10 yosh- 100 yil 0-42  Ayollar 10 yosh- 100 yil 0-32',
      unit: 'g/l'
    }
  ]
  const onCreate = () => {
    setEditor(true)
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
        title={t('Fibrinogen')}
        open={open}
        size='lg'
        onClose={handleClose}
      >
        <div className='flex flex-col gap-3'>
          <div className='grid grid-cols-2 gap-3'>
            <div>
              <AppLabel text='Shablon turi' isRequired />
              <AppSelect options={[]} placeholder='Shablon turi' />
            </div>
          </div>
          {!editor ? (
            <RoundedBlock>
              <div className='flex w-full justify-end'>
                <Button
                  variant='outlined'
                  color='secondary'
                  endIcon={<FaFileAlt />}
                >
                  {t('Eksport')}
                </Button>
              </div>
              <Table
                columns={columnModal}
                data={dataModal}
                classRow={classRowModal}
                hoverable={false}
                stripped={false}
              />
              <div className='flex justify-end gap-1 py-2'>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={onCreate}
                >
                  {t('Saqlash')}
                </Button>
              </div>
            </RoundedBlock>
          ) : (
            <CustomEditor />
          )}
        </div>
      </Modal>
    </div>
  )
}
