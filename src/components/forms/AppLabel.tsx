interface IProps {
    text?: string
    className?: string
    isRequired?: boolean
}

export default function AppLabel(props: IProps) {
    return (
        <label className={`mb-1 font-semibold text-xs leading-4 text-[#232427] ${props.className}`}>
            {props.isRequired ? (
                <span className='text-[#E6533C] pr-1'>*</span>) : ''}
            {props.text}
        </label>
    )
}
