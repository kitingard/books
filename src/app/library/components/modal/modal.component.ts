import { Component, inject } from '@angular/core';
import { StateService } from '../../../services/state/state.service';

@Component({
  selector: 'lib-modal',
  standalone: true,
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  stateService = inject(StateService);

  closeModal() {
    this.stateService.modalSig.set(null);
  }
}
