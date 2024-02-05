import { Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { PollingComponent } from './components/polling/polling.component';

export const routes: Routes = [
  { path: '', component: PollingComponent },
  { path: 'books/:id', component: BookComponent },
];
