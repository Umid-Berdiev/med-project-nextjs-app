interface IProps {
    options: string[];
    onSelect?: (value: string) => void;
    className?: string;
    selectedValue?: string;
  }
  
  export default function AppInput(props: IProps) {
    return (
        <select
        style={{
         backgroundImage: "url('/images/SelectArrow.svg')",
         backgroundPosition: 'right 12px center',
         backgroundRepeat: 'no-repeat',
         // backgroundSize: '16px 16px', // Size of the arrow icon
       }}
         id="select" value={props.selectedValue} className="cursor-pointer appearance-none border h-9 px-3 border-[#2324271A] rounded-lg text-[#161624] font-normal text-[13px] outline-none w-full"
     >
         {props.options.map((option, index) => (
             <option key={index} value={option}>
                 {option}
             </option>
         ))}
     </select>
    )
  }
  