import Search from "../header/search/Search";

interface IHeaderExam {}
export default function HeaderExam({}: IHeaderExam) {
  return (
    <div className="grid grid-cols-8 gap-6 w-full">
      <div className="col-span-3">
        Exam Schedule - Semester final, 2021<div></div>
      </div>
      <div className="col-span-3"></div>
      <Search className="col-span-2" />
    </div>
  );
}
