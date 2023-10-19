interface IGetMonthExamShedule {
  date: Date;
  selectedDate: Date;
}
export const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const weekdaysLong = [
  "Sunday",
  "Monday",
  "Tuethday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const months = [
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
export const hours = [
  { key: "09:00 am", value: 9 },
  { key: "10:00 am", value: 10 },
  { key: "11:00 am", value: 11 },
  { key: "12:00 pm", value: 12 },
  { key: "01:00 pm", value: 13 },
  { key: "02:00 pm", value: 14 },
  { key: "03:00 pm", value: 15 },
  { key: "04:00 pm", value: 16 },
  { key: "05:00 pm", value: 17 },
  { key: "06:00 pm", value: 18 },
];

export function getMonthExamShedule({
  date,
  selectedDate,
}: IGetMonthExamShedule) {
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

    const calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === date.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === selectedDate.toDateString(),
      year: firstDayOfMonth.getFullYear(),
    };

    currentDays.push(calendarDay);
  }
  return currentDays;
}

export function getWeekExamShedule(selectedDate: Date) {
  const calculatedDates = [];

  // Calculate the four required dates
  for (let i = -2; i <= 2; i++) {
    const newDate = new Date(selectedDate);

    newDate.setDate(newDate.getDate() + i);

    const formattedDate = {
      date: newDate.getDate(),
      day: newDate,
      weekday: weekdaysLong[newDate.getDay()],
      selected: newDate.toDateString() === selectedDate.toDateString(),
    };

    calculatedDates.push(newDate);
  }
  return calculatedDates;
}

interface IExam {
  semester: string;
  subject: string;
  time: Date;
  comment: string;
}

export const exams: IExam[] = [
  {
    semester: "4/2",
    subject: "Basic Graphics Design",
    time: new Date(2023, 9, 19, 14, 0),
    comment: "3 Credit: 2pm - 4pm",
  },
  {
    semester: "4/2",
    subject: "Basic Graphics Design",
    time: new Date(2023, 9, 20, 10, 0),
    comment: "3 Credit: 10pm - 12pm",
  },
  {
    semester: "4/2",
    subject: "Basic Graphics Design",
    time: new Date(2023, 9, 17, 10, 0),
    comment: "3 Credit: 10pm - 12pm",
  },
  {
    semester: "4/2",
    subject: "Basic Graphics Design",
    time: new Date(2023, 9, 17, 15, 0),
    comment: "3 Credit: 15pm - 17pm",
  },
];
