import CurrentDate from "./current-data/CurrentDate";
import CurrentMonth from "./current-month/CurrentMonth";

interface IExam {}
export default function Exam({}: IExam) {
  return (
    <div className="grid grid-cols-8 gap-6 px-4 w-full  -mt-12">
      <CurrentDate />
      <div className="bg-[#0A0A1F]/60 rounded-xl backdrop-blur-xl col-span-5"></div>
      <CurrentMonth />
    </div>
  );
}
