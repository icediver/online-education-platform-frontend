"use client";
import { IUser } from "@/types/user.interface";

import StudentItem from "./student-item/StudentItem";
import { useEffect, useState } from "react";
import TableHeader from "./table-header/TableHeader";
import StudentProfile from "./student-profile/StudentProfile";
import SelectFilter from "./select-filter/SelectFilter";
import { useQuery } from "@tanstack/react-query";
import { UserService } from "@/services/user.service";

interface IStudents {
  students: IUser[];
}
export default function Students({ students }: IStudents) {
  const [profile, setProfile] = useState(0);
  const [department, setDepartment] = useState("");

  const { data } = useQuery({
    queryKey: ["get students", department],
    queryFn: async () =>
      await UserService.getAll(department !== "" ? { department } : {}),
    initialData: students,
    onSuccess: (data) => console.log(data, "onSuccess"),
  });
  function selectDepartmentHandler(department: string) {
    setDepartment(department);
  }
  useEffect(() => console.log(department), [department]);
  return (
    <div className="relative">
      <SelectFilter selectDepartmentHandler={selectDepartmentHandler} />
      <div className="grid grid-cols-4 p-6 gap-6">
        <ul className="col-span-3">
          <TableHeader />

          {data.map((student, number) => (
            <li key={student.id}>
              <StudentItem
                student={student}
                onClick={() => {
                  return setProfile(number);
                }}
                className={number === profile ? "!text-gray-200" : ""}
              />
            </li>
          ))}
        </ul>
        {!!students.length && <StudentProfile student={students[profile]} />}
      </div>
    </div>
  );
}
