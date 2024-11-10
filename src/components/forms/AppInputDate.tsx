import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';


interface IProps {
  placeholder?: string
  className?: string
  value?: string
  onDateChange?: string
}

type DatePickerProps = {
  onDateChange: (date: Date[]) => void;
};

export default function AppInputDate(props: IProps) {
  const [selectedDate, setSelectedDate] = useState<Date[]>([]);

  const handleDateChange = (date: Date[]) => {
    setSelectedDate(date);
  };

  return (
      <Flatpickr
        value={selectedDate}
        onChange={handleDateChange}
        placeholder={props.placeholder}

        style={{
          backgroundImage: "url('/images/CalendarIcon.svg')",
          backgroundPosition: 'right 12px center',
          backgroundRepeat: 'no-repeat',
        }}
        options={{
          dateFormat: 'Y-m-d', // Sana formati: Yil-Oy-Kun
        }}
        className="border h-9 px-3 border-[#2324271A] rounded-lg text-[#161624] font-normal text-[13px] outline-none w-full"
      />
  )
}
