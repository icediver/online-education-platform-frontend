// import { Calendar } from "react-calendar";

import Calendar from "@/components/ui/calendar/Calendar";
import { Dispatch, SetStateAction } from "react";
import UpcomingClasses from "./upcoming-classes/UpcomingClasses";

interface ICurrentMonth {
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
}
export default function CurrentMonth(props: ICurrentMonth) {
  return (
    <div className="col-span-2  text-xs h-full ">
      <Calendar {...props} />
      <UpcomingClasses />
    </div>
  );
}
