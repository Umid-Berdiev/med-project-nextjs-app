
interface IProps {
  className?: string
  isChecked: boolean
}

export default function AppInputCheckboxNoLabel(props: IProps) {
    return (
        
        <div className={props.className}>
            {
                
                    <label
                        className={`flex items-center gap-2 leading-9 mb-0 cursor-pointer text-xs`}
                    >
                        <input
                            type="checkbox"
                            name="tabGroup"
                            checked={props.isChecked}
                            className="checkbox checkbox-sm border-secondary rounded [--chkbg:theme(colors.secondary)] 
                            [--chkfg:white] " 
                            

                        />
                    </label>
            }
        </div>
    )
}