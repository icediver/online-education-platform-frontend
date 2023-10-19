import { Dispatch, SetStateAction } from "react";
import { getMonthExamShedule } from "@/utils/date.utils";

interface ICalendarDays {
  date: Date;
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
}
export default function CalendarDays({
  date,
  selectedDate,
  setSelectedDate,
}: ICalendarDays) {
  return (
    <div className="grid-cols-7 grid text-[0.6rem] text-white/60  ">
      {getMonthExamShedule({ date, selectedDate }).map((day) => {
        return (
          <div
            key={day.date.toLocaleString()}
            className={
              "w-10 h-6 relative flex justify-center items-center" +
              (day.currentMonth ? " text-gray-700" : "")
            }
            onClick={() =>
              setSelectedDate(new Date(day.year, day.month, day.number))
            }
          >
            <div
              className={
                day.selected
                  ? "w-6 h-6 p-1.5 bg-pink-900 text-white text-center rounded-full "
                  : "text-center  cursor-pointer"
              }
            >
              {day.number}
            </div>
          </div>
        );
      })}
    </div>
  );
}
