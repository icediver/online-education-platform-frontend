"use client";
import { Dispatch, SetStateAction, useState } from "react";
import CalendarDays from "./calendar-days/CalendarDays";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { months, weekdays } from "@/utils/date.utils";

interface ICalendar {
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
}
export default function Calendar(props: ICalendar) {
  const [date, setDate] = useState(new Date());
  return (
    <div className="transparent-panel pb-3">
      <div className="p-4 flex justify-between">
        <div className="inline-block ">
          {months[date.getMonth()]} {date.getFullYear()}
        </div>
        <div>
          <button
            className="mr-2"
            onClick={() => {
              if (date.getMonth() == 0) {
                setDate(new Date(date.getFullYear() - 1, 11, 1));
              } else {
                setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
              }
            }}
          >
            <BsChevronLeft />
          </button>
          <button
            onClick={() => {
              if (date.getMonth() == 11) {
                setDate(new Date(date.getFullYear() + 1, 0, 1));
              } else {
                setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
              }
            }}
          >
            <BsChevronRight />
          </button>
        </div>
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
          <CalendarDays date={date} {...props} />
        </div>
      </div>
    </div>
  );
}
