import 'flatpickr/dist/flatpickr.min.css'
import Flatpickr from 'react-flatpickr'

interface IProps {
  placeholder?: string
  className?: string
  value?: string
  onDateChange?: string
  mode?: 'single' | 'multiple' | 'range'
}

type DatePickerProps = {
  onDateChange: (date: Date[]) => void
}

export default function AppInputDate(props: IProps) {
  // const [selectedDate, setSelectedDate] = useState<Date[]>([])

  // const handleDateChange = (date: Date[]) => {
  //   setSelectedDate(date)
  // }

  return (
    <Flatpickr
      // value={selectedDate}
      // onChange={handleDateChange}
      // placeholder={props.placeholder}
      // style={{
      //   backgroundImage: "url('/images/CalendarIcon.svg')",
      //   backgroundPosition: 'right 12px center',
      //   backgroundRepeat: 'no-repeat'
      // }}
      className='h-9 w-full rounded-lg border border-[#2324271A] bg-[url(/images/CalendarIcon.svg)] bg-[position:right_12px_center]  bg-no-repeat px-3 text-sm text-[#161624] outline-none'
      options={{
        mode: props.mode || 'single',
        dateFormat: 'Y-m-d'
      }}
      {...props}
    />
  )
}
