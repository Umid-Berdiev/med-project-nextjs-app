import { Locale } from '@/src/configs/i18n'
import { useTranslations } from '@/src/configs/t'
import classNames from 'classnames'
import { useParams } from 'next/navigation'
import Select from 'react-select'

const controlStyles = {
  base: 'rounded-lg px-3 !min-h-9 border text-sm text-[#161624] !cursor-pointer',
  focus: 'border-gray-400',
  nonFocus: 'border-[#2324271A]'
}
const placeholderStyles = 'text-gray-500'
// const selectInputStyles = ''
// const valueContainerStyles = ''
// const singleValueStyles = 'ml-1'
// const multiValueStyles =
//   'bg-gray-100 rounded items-center py-0.5 pl-2 pr-1 gap-1.5'
// const multiValueLabelStyles = 'leading-6 py-0.5'
// const multiValueRemoveStyles =
//   'border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md'
// const indicatorsContainerStyles = ''
// const clearIndicatorStyles =
//   'text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800'
const indicatorSeparatorStyles = 'none'
const dropdownIndicatorStyles = 'w-4 text-gray-700'
const menuStyles = 'p-1 mt-1 border border-gray-200 bg-white rounded-lg'
const groupHeadingStyles = 'ml-3 mt-2 mb-1 text-gray-500 text-sm'
const optionStyles = {
  base: 'hover:cursor-pointer p-2 rounded !text-sm',
  focus: 'bg-gray-100 active:bg-gray-200',
  selected: "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500"
}
const noOptionsMessageStyles =
  'text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm'

export default function AppSelect(props: {
  options: { label: string; value: string }[]
  onSelect?: (value: string) => void
  className?: string
  selectedValue?: string
  placeholder?: string
  color?: 'primary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
  [key: string]: any
}) {
  const { locale } = useParams()
  const { t } = useTranslations(locale as Locale)

  return (
    <Select
      unstyled
      styles={{
        input: base => ({
          ...base,
          'input:focus': {
            boxShadow: 'none'
          }
        }),
        control: base => ({
          ...base,
          transition: 'none'
        })
      }}
      classNames={{
        control: ({ isFocused }) =>
          classNames(
            controlStyles.base,
            isFocused ? controlStyles.focus : controlStyles.nonFocus
          ),
        placeholder: () => placeholderStyles,
        // input: () => selectInputStyles,
        // valueContainer: () => valueContainerStyles,
        // singleValue: () => singleValueStyles,
        // indicatorsContainer: () => indicatorsContainerStyles,
        // clearIndicator: () => clearIndicatorStyles,
        dropdownIndicator: () => dropdownIndicatorStyles,
        indicatorSeparator: () => indicatorSeparatorStyles,
        menu: () => menuStyles,
        groupHeading: () => groupHeadingStyles,
        option: ({ isFocused, isSelected }) =>
          classNames(
            isFocused && optionStyles.focus,
            isSelected && optionStyles.selected,
            optionStyles.base
          ),
        noOptionsMessage: () => noOptionsMessageStyles
      }}
      placeholder={props.placeholder || t('Tanlang')}
      {...props}
    />
  )
}
