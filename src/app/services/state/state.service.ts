import { Injectable, signal } from '@angular/core';
import { User } from '../../models/user.interface';
import { Modal } from '../../models/modal.interface';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  currentUserSig = signal<User | undefined | null>(undefined);
  modalSig = signal<Modal | null>(null);
}
