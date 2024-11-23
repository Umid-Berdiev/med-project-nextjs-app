'use client'
import Breadcrumb from '@/src/components/Breadcrumbs'
import RoundedBlock from '@/src/components/blocks/RoundedBlock'
import Button from '@/src/components/Button'
import Table, { ITableColumn } from '@/src/components/table/Table'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import ProfileBlock from '@/src/views/doctors-profile/detail/ProfileBlock'
import DeleteIcon from '@/src/components/icons/DeleteIcon'
import AppInputCheckboxNoLabel from '@/src/components/forms/AppInputCheckboxNoLabel'
import ListIconLog from '@/src/components/icons/ListILogcon'
import BalanceIcon2 from '@/src/components/icons/BalanceIcon2'
import ProductListCountIcon from '@/src/components/icons/ProductListCountIcon'
import Heading5 from '@/src/components/typography/Heading5'
import AppLabel from '@/src/components/forms/AppLabel'
import AppInput from '@/src/components/forms/AppInput'
import AppSelect2 from '@/src/components/forms/AppSelect2'
import AppSelect from '@/src/components/forms/AppSelect'
import ListIcon from '@/src/components/icons/ListIcon'
import Modal from '@/src/components/Modal'
import { TbTableOptions } from 'react-icons/tb'
import { SlOptionsVertical } from 'react-icons/sl'
import { BiPrinter } from 'react-icons/bi'
import { FiEdit2 } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'

export default function CashboxPage() {
    const t = useTranslations('')
    const selectOptions = [
        { label: 'Pul ko’chirish', value: '2' },
        { label: 'Terminal orqali', value: '1' },
        { label: 'Naqd pul orqali', value: '0' }
    ]
    const [open, setOpen] = useState(false)
    const [sortBy, setSortBy] = useState<
        | {
            column: string
            direction: 'asc' | 'desc'
        }
        | undefined
    >(undefined)
    const [perPage, setPerPage] = useState(10)
    const [page, setPage] = useState(0)
    const { locale } = useParams()
    const handleClose = () => {
        setOpen(false)
    }
    const handleSort = (column: string) => {
        setSortBy(prev =>
            prev?.column === column
                ? { column, direction: prev.direction === 'asc' ? 'desc' : 'asc' }
                : { column, direction: 'asc' }
        )
    }
    type CellType = {
        id: number
        fullname: string
        price: string
        visitDate: string
    }
    const columns: ITableColumn<CellType>[] = [
        {
            header: '№',
            width: '10px',

            col: (_: CellType, index?: number) =>
                index !== undefined ? index + 1 : 0
        },
        {
            header: t('Xizmat yoki tovar nomi'),
            col: (row: CellType) => row.fullname,
            sortable: true
        },
        {
            header: t('Narxi'),
            col: (row: CellType) => row.price,
            sortable: true
        },
        {
            header: t('Tashrif sanasi'),
            col: (row: CellType) => row.visitDate,
            sortable: true
        },
        {
            header: (
                <>
                    <DeleteIcon />
                    {/* <TbLayoutGridRemove size={18} /> */}
                </>
            ),
            col: (row: CellType) => (
                <AppInputCheckboxNoLabel isChecked={false} />
            )
        }
    ]

    const data: CellType[] = [
        {
            id: 1,
            fullname: 'Alice',
            visitDate: '2023-01-01',
            price: '85 000 som'
        },
        {
            id: 2,
            fullname: 'Bob',
            visitDate: '2023-02-01',
            price: '85 000 som'
        },
        {
            id: 3,
            fullname: 'Charlie',
            visitDate: '2023-03-01',
            price: '85 000 som'
        },
        {
            id: 4,
            fullname: 'David',
            visitDate: '2023-04-01',
            price: '85 000 som'
        },
        {
            id: 5,
            fullname: 'Eve',
            visitDate: '2023-05-01',
            price: '85 000 som'
        },
        {
            id: 6,
            fullname: 'Frank',
            visitDate: '2023-06-01',
            price: '85 000 som'
        },
        {
            id: 7,
            fullname: 'George',
            visitDate: '2023-07-01',
            price: '85 000 som'
        },
        {
            id: 8,
            fullname: 'Hannah',
            visitDate: '2023-08-01',
            price: '85 000 som'
        },
        {
            id: 9,
            fullname: 'Ivan',
            visitDate: '2023-09-01',
            price: '85 000 som'
        },

    ]
    const classRow = (row: CellType) => {
        return row.id % 3 == 0 ? 'bg-softError ' : 'bg-softSuccess'
    }

    type CellModalType = {
        id: number
        numberCard: string,
        numberReceipt: string,
        payedSumm: string
        typePay: string
        buyerName: string,
        datePay: string
    }
    const modalColumns: ITableColumn<CellModalType>[] = [
        {
            header: '№',
            col: (_: CellModalType, index?: number) =>
                index !== undefined ? index + 1 : 0
        },
        {
            header: t('ID'),
            col: (row: CellModalType) => row.id,
            sortable: true
        },
        {
            header: t('Karta raqami'),
            col: (row: CellModalType) => row.numberCard,
            sortable: true
        },
        
        {
            header: t('Kvitansiya raqami'),
            col: (row: CellModalType) => row.numberReceipt,
            sortable: true
        },
        {
            header: t('Tolangan summa'),
            col: (row: CellModalType) => row.payedSumm,
            sortable: true
        },
        {
            header: t('To’lov turi'),
            col: (row: CellModalType) => row.typePay,
            sortable: true
        },
        {
            header: t('To’lov sanasi'),
            col: (row: CellModalType) => row.datePay,
            sortable: true
        },
        {
            header: (
                <div className='text-center pl-4  bg-white shadow-sm'>
                    <TbTableOptions color='#23242780' size={18} />
                </div>
            ),
            col: (row: CellModalType) => (
                <div className='dropdown dropdown-left  dropdown-bottom'>
                    <div tabIndex={0} role='button' className='btn  bg-white'>
                        <SlOptionsVertical size={14} />
                    </div>
                    <ul
                        tabIndex={0}
                        className='menu dropdown-content  z-[1000] w-52 rounded-s-md bg-base-100 p-2 shadow'
                    >
                        <li>
                            <a className='flex items-center gap-2'
                            >
                                <BiPrinter />
                                {t('Pechat qilish')}
                            </a>
                        </li>
                        <li>
                            <a className='flex items-center gap-2'
                            >
                                <FiEdit2 />
                                {t('Ozgartirish')}
                            </a>
                        </li>
                        <li>
                            <a className='flex items-center gap-2'
                            >
                                <AiOutlineDelete />
                                {t('Ochirish')}
                            </a>
                        </li>
                    </ul>
                </div>
            )
        }
    ]

    const modalData: CellModalType[] = [
        {
            id: 3948290,
            numberCard: '13874',
            numberReceipt: '77503',
            payedSumm: '8 113 015 so’m',
            typePay: 'Naqd; Terminal',
            buyerName: 'NURITDINOVA DILDORA YANGIBOY QIZI',
            datePay: '26.09.2024, 15:09'

        },
        {
            id: 3946582,
            numberCard: '13874',
            numberReceipt: '77503',
            payedSumm: '8 113 015 so’m',
            typePay: 'Naqd; Terminal',
            buyerName: 'NURITDINOVA DILDORA YANGIBOY QIZI',
            datePay: '26.09.2024, 15:09'

        },
        {
            id: 394782,
            numberCard: '13874',
            numberReceipt: '77503',
            payedSumm: '8 113 015 so’m',
            typePay: 'Naqd; Terminal',
            buyerName: 'NURITDINOVA DILDORA YANGIBOY QIZI',
            datePay: '26.09.2024, 15:09'

        },
        {
            id: 339482,
            numberCard: '13874',
            numberReceipt: '77503',
            payedSumm: '8 113 015 so’m',
            typePay: 'Naqd; Terminal',
            buyerName: 'NURITDINOVA DILDORA YANGIBOY QIZI',
            datePay: '26.09.2024, 15:09'

        },
        {
            id: 394842,
            numberCard: '13874',
            numberReceipt: '77503',
            payedSumm: '8 113 015 so’m',
            typePay: 'Naqd; Terminal',
            buyerName: 'NURITDINOVA DILDORA YANGIBOY QIZI',
            datePay: '26.09.2024, 15:09'

        },
        {
            id: 394382,
            numberCard: '13874',
            numberReceipt: '77503',
            payedSumm: '8 113 015 so’m',
            typePay: 'Naqd; Terminal',
            buyerName: 'NURITDINOVA DILDORA YANGIBOY QIZI',
            datePay: '26.09.2024, 15:09'

        },
        {
            id: 394821,
            numberCard: '13874',
            numberReceipt: '77503',
            payedSumm: '8 113 015 so’m',
            typePay: 'Naqd; Terminal',
            buyerName: 'NURITDINOVA DILDORA YANGIBOY QIZI',
            datePay: '26.09.2024, 15:09'

        },

    ]
    return (
        <div className='container p-4'>
            <Breadcrumb breadcrumbs={[
                { label: t('Kassa'), href: `/${locale}/cashbox` },
                { label: t("Ismoilov Shaxzod Farrux ogli") }
            ]} />
            <ProfileBlock />
            <div className='grid grid-cols-3 gap-4 mt-4'>
                <RoundedBlock>
                    <div className="flex gap-3 relative">
                        <ListIconLog />
                        <div>
                            <h5 className='text-[13px] mb-1'>{t('Tolangan xizmatlar')}:</h5>
                            <b className='font-bold text-lg leading-6'>2 451 500 <span className='pl-1 font-semibold text-[#23242780] text-xs'>{t('som')}</span></b>
                        </div>
                    </div>
                </RoundedBlock>
                <RoundedBlock>
                    <div className="flex gap-3 relative">
                        <ProductListCountIcon />
                        <div>
                            <h5 className='text-[13px] mb-1'>{t('Xarid qilgan tovarlar soni')}:</h5>
                            <b className='font-bold text-lg leading-6'>23 {t('ta')}</b>
                        </div>
                        <a href="#" className='absolute underline-offset-4 right-0 top-0 font-semibold cursor-pointer inline-block text-sm decoration-dashed underline text-[#23242780]'>{t('Korish')}</a>
                    </div>
                </RoundedBlock>
                <RoundedBlock>
                    <div className="flex gap-3">
                        <BalanceIcon2 />
                        <div>
                            <h5 className='text-[13px] mb-1'>{t('Jami qarzdorlik')}:</h5>
                            <div>
                                <b className='font-bold text-lg leading-6 text-error'>- 1 846 843</b>
                                <span className='text-error text-sm font-semibold pl-1'>{t('som')}</span>
                            </div>
                        </div>
                    </div>
                </RoundedBlock>
            </div>
            <div className='grid grid-cols-12 gap-4 mt-4'>
                <div className='col-span-8'>
                    <RoundedBlock>
                        <Heading5>{t('Tolanmagan xizmatlar va tovarlar')}</Heading5>
                        <Table
                            columns={columns}
                            data={data.slice(page * perPage, page * perPage + perPage)}
                            sortBy={sortBy}
                            setSortBy={handleSort}
                            classRow={classRow}
                            hoverable={false}
                            stripped={false}
                        />
                        <div className="flex items-center justify-between pb-4">
                            <p className='mb-0 text-[13px] leading-5 text-[#23242780]'>{t('Tanlangan jami xizmat va tovarlar narxi')}:</p>
                            <div>
                                <b className='font-bold text-lg leading-6 text-error'>- 1 846 843</b>
                                <span className='text-error text-sm font-semibold pl-1'>{t('som')}</span>
                            </div>
                        </div>
                    </RoundedBlock>
                </div>
                <div className='col-span-4'>
                    <RoundedBlock>
                        <Heading5>{t('Tolov')}</Heading5>
                        <div>
                            <AppLabel isRequired={true} text='Kartani tanlang' />
                            <AppInput value='12845 - 2024 Cтационарный карта 27.09.2024' placeholder='Karta' />
                        </div>
                        <div>
                            <AppLabel isRequired={true} text='Tolov turi' />
                            <AppSelect options={selectOptions} />
                        </div>
                        <div>
                            <AppLabel isRequired={true} text='Terminaldan yechish uchun summa' />
                            <AppInput value='36764' placeholder='Terminaldan yechish uchun summa' />
                        </div>
                        <div>
                            <AppLabel isRequired={true} text='Naqd pul olinadigan summa' />
                            <AppInput value='36764' placeholder='Naqd pul olinadigan summa' />
                        </div>
                        <Button onClick={() => setOpen(true)}>{t('Tolov qilish va chop etish')} <ListIcon /> </Button>
                    </RoundedBlock>
                </div>
            </div>
            <Modal
                bg='bg-background'
                title='Xarid qilgan xizmatlar va tovarlar'
                open={open}
                size='lg'
                onClose={handleClose}
            >
                <div className='flex flex-col gap-3 py-4'>
                    <Table
                        columns={modalColumns}
                        data={modalData.slice(page * perPage, page * perPage + perPage)}
                        sortBy={sortBy}
                        setSortBy={handleSort}
                        classRow={classRow}
                        hoverable={false}
                        stripped={false}
                    />
                </div>
                <div className='flex justify-end gap-1 py-2'>
                    <Button variant='outlined' color='secondary' onClick={handleClose}>
                        {t('Bekor qilish')}
                    </Button>
                    <Button variant='contained' color='secondary'>
                        {t('Yaratish')}
                    </Button>
                </div>
            </Modal>
        </div >

    )
}
