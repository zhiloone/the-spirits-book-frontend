export interface QuestionTextModel {
  letter?: string;
  question?: string[];
  answer: string[];
  authors?: string[];
}

export interface QuestionModel {
  id: number;
  part: string;
  chapter: string;
  section: string;
  questions: QuestionTextModel[];
  comment?: string[];
  created_at: string; // backend returns datetime as ISO string
}