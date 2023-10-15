"use client";
import { useState } from "react";
import CalendarDays from "./calendar-days/CalendarDays";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
interface ICalendar {}
export default function Calendar({}: ICalendar) {
  const [date, setDate] = useState(new Date());
  return (
    <div className="transparent-panel pb-3">
      <div className="p-4">
        {months[date.getMonth()]} {date.getFullYear()}
      </div>
      <div className="px-2 text-[0.6rem]">
        <div className="grid grid-cols-7 mb-2">
          {weekdays.map((weekday) => {
            return (
              <div className="text-center" key={weekday}>
                <p>{weekday}</p>
              </div>
            );
          })}
        </div>
        <div className="table">
          <CalendarDays date={date} setDate={setDate} />
        </div>
      </div>
    </div>
  );
}
