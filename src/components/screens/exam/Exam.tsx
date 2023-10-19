"use client";
import { useState } from "react";
import CurrentDate from "./current-data/CurrentDate";
import CurrentMonth from "./current-month/CurrentMonth";
import CurrentWeek from "./current-week/CurrentWeek";
import { getWeekExamShedule, months } from "@/utils/date.utils";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ExamFooter from "./exam-footer/ExamFooter";

interface IExam {}
export default function Exam({}: IExam) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  function getLastDayOfMonth(year: number, month: number) {
    return new Date(year, month + 1, 0);
  }

  return (
    <div className="-mt-20 ">
      <div className="mb-2.5 mx-8 flex justify-between w-48 items-center">
        {months[selectedDate.getMonth()]}{" "}
        {getWeekExamShedule(selectedDate)[0].getDate()} -{" "}
        {getWeekExamShedule(selectedDate)[4].getDate()}
        <div className="">
          <button
            className="mr-2"
            onClick={() => {
              const nextDay = new Date(selectedDate);
              nextDay.setDate(selectedDate.getDate() - 1);
              setSelectedDate(nextDay);
            }}
          >
            <BsChevronLeft size={12} />
          </button>
          <button
            onClick={() => {
              const nextDay = new Date(selectedDate);
              nextDay.setDate(selectedDate.getDate() + 1);
              setSelectedDate(nextDay);
            }}
          >
            <BsChevronRight size={12} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-8 gap-6 px-4 w-full  ">
        <div className="col-span-6 grid grid-cols-5 gap-6">
          <CurrentDate selectedDate={selectedDate} />
          <CurrentWeek selectedDate={selectedDate} />
          <ExamFooter />
        </div>
        <CurrentMonth
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
    </div>
  );
}
