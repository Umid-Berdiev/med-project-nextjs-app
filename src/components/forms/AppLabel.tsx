interface IProps {
  text?: string
  className?: string
  isRequired?: boolean
}

export default function AppLabel(props: IProps) {
  return (
    <label
      className={`text-xs font-semibold text-[#232427] ${props.className}`}
    >
      {props.isRequired ? <span className='pr-1 text-[#E6533C]'>*</span> : ''}
      {props.text}
    </label>
  )
}
