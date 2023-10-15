import { Dispatch, SetStateAction } from "react";

interface ICalendarDays {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
}
export default function CalendarDays({ date, setDate }: ICalendarDays) {
  let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  let weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];
  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(
        firstDayOfMonth.getDate() + (day - weekdayOfFirstDay),
      );
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === date.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === date.toDateString(),
      year: firstDayOfMonth.getFullYear(),
    };

    currentDays.push(calendarDay);
  }
  return (
    <div className="grid-cols-7 grid text-[0.6rem] text-white/60  ">
      {currentDays.map((day) => {
        return (
          <div
            key={day.date.toLocaleString()}
            className={
              "w-10 h-6 relative flex justify-center items-center" +
              (day.currentMonth ? " text-gray-700" : "")
            }
            onClick={() => setDate(new Date(day.year, day.month, day.number))}
          >
            <div
              className={
                day.selected
                  ? "w-6 h-6 p-1.5 bg-pink-900 text-white rounded-full"
                  : ""
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
