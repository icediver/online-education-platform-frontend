export interface IExam {
  semester: number;
  year: number;
  subject: string;
  date: Date | string;
  description: string;
}

export type TypeExamUpdate = Partial<IExam>;
