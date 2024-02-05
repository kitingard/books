export interface BooksData {
  [k: string]: {
    title: string;
    author: string;
    genre: string | string[];
    release: number;
    description: string;
  };
}
