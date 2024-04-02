export type QuestionType = {
  points: number;
  question: string;
  answer: string;
  answered: boolean;
};

export type CategoryType = {
  name: string;
  questions: QuestionType[];
};

export type FetchedData = {
  categories: CategoryType[];
};
