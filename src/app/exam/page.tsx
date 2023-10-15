import type { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import Exam from "@/components/screens/exam/Exam";

export const metadata: Metadata = {
  title: "",
  ...NO_INDEX_PAGE,
};

export default function ExamPage() {
  return <Exam />;
}
