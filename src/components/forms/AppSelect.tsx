import classnames from 'classnames'

interface IProps {
  options: { label: string; value: string }[]
  onSelect?: (value: string) => void
  className?: string
  selectedValue?: string
  placeholder?: string
  color?: 'primary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
}

export default function AppSelect(props: IProps) {
  return (
    <select
      id='select'
      defaultValue={props.selectedValue || ''}
      className={classnames(
        'h-9 w-full cursor-pointer appearance-none rounded-lg border border-[#2324271A] px-3 text-sm text-[#161624] outline-none',
        'bg-[url(/images/SelectArrow.svg)]',
        'bg-[position:right_12px_center]',
        'bg-no-repeat',
        `${props.color ? `select-${props.color}` : ''}`,
        props.className
      )}
    >
      {props.placeholder && (
        <option value='' disabled>
          {props.placeholder}
        </option>
      )}
      {props.options?.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
