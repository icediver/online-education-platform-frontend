// import { Calendar } from "react-calendar";

import Calendar from "@/components/ui/calendar/Calendar";

interface ICurrentMonth {}
export default function CurrentMonth({}: ICurrentMonth) {
  return (
    <div className="col-span-2  text-xs">
      <Calendar />
    </div>
  );
}
