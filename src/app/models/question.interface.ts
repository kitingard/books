export interface Question {
  answer?: string;
  question?: string;
  options?: Question[];
  bookId?: string;
}
