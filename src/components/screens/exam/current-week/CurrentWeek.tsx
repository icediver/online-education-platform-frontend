import { IExam } from "@/types/exam.interface";
import { getWeekExamShedule, hours, weekdaysLong } from "@/utils/date.utils";
import clsx from "clsx";
import { Fragment } from "react";
import ExamScheduleItem from "./exam-schedule-item/ExamScheduleItem";

interface ICurrentWeek {
  selectedDate: Date;
  exams: IExam[];
}
export default function CurrentWeek({ selectedDate, exams }: ICurrentWeek) {
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
        {hours.map((hour, i) => (
          <Fragment key={hour.value}>
            {weekSchedule.map((day, index) => {
              const examsOfDate = exams?.filter((exam) => {
                const options: Intl.DateTimeFormatOptions = {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                };
                return (
                  day.toLocaleString("en-Us", options) ===
                  new Date(exam.date).toLocaleString("en-Us", options)
                );
              });

              return (
                <div
                  key={index}
                  className={clsx(
                    "h-12 relative  border-dashed border border-gray-900",
                    index < 5 ? "border-t-black" : "",
                    i > 8 ? "border-b-black" : "",
                  )}
                >
                  {exams &&
                    examsOfDate.map((exam) => {
                      if (!(new Date(exam.date).getHours() === hour.value))
                        return null;
                      return (
                        <ExamScheduleItem
                          exam={exam}
                          key={exam.date.toString()}
                        />
                      );
                    })}
                </div>
              );
            })}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
