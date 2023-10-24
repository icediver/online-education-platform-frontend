import type { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import Exam from "@/components/screens/exam/Exam";
import { ExamService } from "@/services/exam.service";

export const metadata: Metadata = {
  title: "",
  ...NO_INDEX_PAGE,
};
async function getData() {
  const res = await ExamService.getAll();
  if (!res) throw new Error("Failed to fetch data");
  return res;
}
export default async function ExamPage() {
  const { data } = await getData();
  return <Exam exams={data} />;
}
