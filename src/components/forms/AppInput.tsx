interface IProps {
  placeholder?: string
  className?: string
  value?: string
}

export default function AppInput(props: IProps) {
  return (
    <input
      type='text'
      value={props.value}
      placeholder={props.placeholder}
      className={`border h-9 px-3 border-[#2324271A] rounded-lg text-[#161624] font-normal text-[13px] outline-none w-full ${props.className}`}
    />
  )
}
