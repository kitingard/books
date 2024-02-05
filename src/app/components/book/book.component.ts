import { Component, inject } from '@angular/core';
import { booksData } from '../../constants/books-data';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book.component.html',
})
export class BookComponent {
  route = inject(ActivatedRoute);
  bookId = this.route.snapshot.paramMap.get('id');
  book = booksData[this.bookId ?? ''];
  bookCover = `../../../assets/book-covers/${this.bookId}.jpg`;
}
