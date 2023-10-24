import { IUser } from "@/types/user.interface";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface IStudentItem extends ButtonHTMLAttributes<HTMLButtonElement> {
  student: IUser;
}
export default function StudentItem({
  student,
  onClick,
  className,
}: IStudentItem) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "text-gray-600 w-full border-dashed border-b border-gray-800 p-6 grid-cols-8 grid text-start text-xs gap-4",
        className,
      )}
    >
      <div className="col-span-2">{student.name}</div>
      <div className="text-center">{student.id}</div>
      <div className="col-span-2">{student.email}</div>
      <div className="text-center">
        {student.year}/{student.semester}
      </div>
      <div className="col-span-2 text-end">{student.department}</div>
    </button>
  );
}
