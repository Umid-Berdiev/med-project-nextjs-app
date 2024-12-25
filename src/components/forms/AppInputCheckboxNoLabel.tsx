interface IProps {
  className?: string
  isChecked: boolean
}

export default function AppInputCheckboxNoLabel(props: IProps) {
  return (
    <div className={props.className}>
      <label
        className={`mb-0 flex cursor-pointer items-center gap-2 text-xs leading-9`}
      >
        <input
          type='checkbox'
          name='tabGroup'
          defaultChecked={props.isChecked}
          className='checkbox checkbox-sm rounded border-secondary [--chkbg:theme(colors.secondary)] [--chkfg:white]'
        />
      </label>
    </div>
  )
}
