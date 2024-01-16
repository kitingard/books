import { Injectable, signal } from '@angular/core';
import { User } from '../../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  currentUserSig = signal<User | undefined | null>(undefined);
  modalSig = signal<boolean>(false);
}
