import { Injectable, signal } from '@angular/core';
import { User } from '../../models/user.interface';
import { Modal } from '../../library/models/modal.interface';
import { Question } from '../../models/question.interface';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  currentUserSig = signal<User | undefined | null>(undefined);
  modalSig = signal<Modal | null>(null);
  pollingSig = signal<Question | null>(null);
}
