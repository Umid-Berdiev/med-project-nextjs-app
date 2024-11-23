interface IProps {
  placeholder?: string
  className?: string
  value?: string
  isSearch?: boolean
  disabled?: boolean
}

export default function AppInput(props: IProps) {
  return (
    <input
      disabled={props.disabled}
      style={{
        backgroundImage: props.isSearch ? "url('/images/SearchIcon.svg')" : '',
        backgroundPosition: 'right 12px center',
        backgroundRepeat: 'no-repeat'
      }}
      type='text'
      value={props.value}
      placeholder={props.placeholder}
      className={`h-9 w-full rounded-lg border border-[#2324271A] px-3 text-[13px]  text-[#161624] outline-none ${props.className}`}
    />

    // 11svkjsdnk
  )
}
