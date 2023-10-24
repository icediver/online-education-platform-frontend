import { axiosAuth, axiosClassic } from "@/api/api.interceptor";
import { IExam, TypeExamUpdate } from "@/types/exam.interface";

export const ExamService = {
  async getAll() {
    const exams = await axiosClassic.get<IExam[]>("/exams");
    return exams;
  },
  async getById(examId: number) {
    const { data: exam } = await axiosAuth.get<IExam>(`/exams/${examId}`);
    return exam;
  },
  async create() {
    const { data: exam } = await axiosAuth.post<IExam>("/exams");
    return exam;
  },
  async update(examId: number, data: TypeExamUpdate) {
    const { data: exam } = await axiosAuth.patch<IExam>(
      `/exams/${examId}`,
      data,
    );
    return exam;
  },
  delete(examId: number) {
    return axiosAuth.delete(`/exams/${examId}`);
  },
};
