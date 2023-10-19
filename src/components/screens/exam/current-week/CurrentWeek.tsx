import {
  exams,
  getWeekExamShedule,
  hours,
  weekdays,
  weekdaysLong,
} from "@/utils/date.utils";
import clsx from "clsx";
import { Fragment } from "react";

interface ICurrentWeek {
  selectedDate: Date;
}
export default function CurrentWeek({ selectedDate }: ICurrentWeek) {
  const weekSchedule = getWeekExamShedule(selectedDate);

  return (
    <div className="col-span-4">
      <div className="transparent-panel mb-4 h-20 grid grid-cols-5 text-gray-400">
        {weekSchedule.map((day) => (
          <div
            className="flex justify-center items-center"
            key={day.toDateString()}
          >
            <div
              className={
                day.toDateString() === selectedDate.toDateString()
                  ? "text-gradient"
                  : ""
              }
            >
              <div className="text-center text-lg"> {day.getDate()}</div>
              <div className="text-[0.7rem] font-light">
                {weekdaysLong[day.getDay()]}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 ">
        {hours.map((hour) => (
          <Fragment key={hour.value}>
            {weekSchedule.map((day, index) => {
              const examsOfDate = exams.filter((exam) => {
                const options: Intl.DateTimeFormatOptions = {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                };

                return (
                  day.toLocaleString("en-Us", options) ===
                  exam.time.toLocaleString("en-Us", options)
                );
              });
              return (
                <div
                  key={index}
                  className={clsx(
                    "h-12 relative  border-dashed border border-gray-900",
                    index < 5 ? "border-t-black" : "",
                    index > 44 ? "border-b-black" : "",
                  )}
                >
                  {examsOfDate[0]?.time.getHours() === hour.value && (
                    <div className="absolute bg-[#070816] -right-2 rounded-md h-[3.8rem] px-2 py-1 z-10 -mt-1.5 w-36 border border-gray-800 animate-opacity">
                      <div className="text-[0.7rem]">
                        {examsOfDate[0].semester}
                      </div>
                      <div className="text-gradient text-[0.7rem]">
                        {examsOfDate[0].subject}
                      </div>
                      <div className="text-[0.6rem] text-gray-500">
                        {examsOfDate[0].comment}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
