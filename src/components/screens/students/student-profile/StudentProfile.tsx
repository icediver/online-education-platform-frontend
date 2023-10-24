import { IUser } from "@/types/user.interface";
import clsx from "clsx";
import Image from "next/image";
import styles from "./StudentProfile.module.scss";

interface IStudentProfile {
  student: IUser;
}
export default function StudentProfile({ student }: IStudentProfile) {
  return (
    <div className="col-span-1 transparent-panel -mt-32 p-6 h-[785px]">
      <div
        className={clsx(
          "relative  h-[288px] rounded-xl overflow-hidden bg-purple-700",
          styles.avatar,
        )}
      >
        <Image
          src={student?.avatarPath}
          alt={student?.name}
          width={300}
          height={600}
          className=""
        />
        <div className="transparent-panel mx-auto -my-8 text-center py-6 w-48">
          <div>{student.name}</div>
          <div className="text-xs mt-2 text-gray-400">
            student id: {student.id}
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-black mt-6 p-4">
        Academic Info.
        <div className="text-xs text-gray-600 mt-4">Semester</div>
        <div className="text-xs text-gray-400">
          <span>{student.year}</span>
          th year - <span>{student.semester}nd semester</span>
        </div>
        <div className="text-xs text-gray-400 mt-4">
          <div className="text-gray-600">Batch/Department</div>
          <span>2010-2011; </span>
          <span className="text-gray-400">{student.department}</span>
        </div>
        <div className="text-xs text-gray-400 mt-4">
          <div className="text-gray-600">Cumulative GPA/Grade</div>
          <span>3.80(A)</span>
        </div>
      </div>
    </div>
  );
}
