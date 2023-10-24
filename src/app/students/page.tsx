import type { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { UserService } from "@/services/user.service";
import Students from "@/components/screens/students/Students";

export const metadata: Metadata = {
  title: "",
  ...NO_INDEX_PAGE,
};
async function getData() {
  const res = await UserService.getAll();
  if (!res) throw new Error("Failed to fetch data");
  return res;
}

export default async function StudentsPage() {
  const data = await getData();
  console.log(data, "page");
  return <Students students={data} />;
}
