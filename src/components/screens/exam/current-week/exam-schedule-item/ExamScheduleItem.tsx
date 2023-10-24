import { IExam } from "@/types/exam.interface";

interface IExamScheduleItem {
  exam: IExam;
}
export default function ExamScheduleItem({ exam }: IExamScheduleItem) {
  return (
    <div className="absolute bg-[#070816] -right-2 rounded-md h-[3.8rem] px-2 py-1 z-10 -mt-1.5 w-36 border border-gray-800 animate-opacity">
      <div className="text-[0.7rem] text-gray-300">
        {exam.semester}/
        <span className="text-[0.6rem] text-gray-500">{exam.year}</span>
      </div>
      <div className="text-gradient text-[0.7rem]">{exam.subject}</div>
      <div className="text-[0.6rem] text-gray-500">{exam.description}</div>
    </div>
  );
}
