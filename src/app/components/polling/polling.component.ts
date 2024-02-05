import { Component, inject } from '@angular/core';
import { StateService } from '../../services/state/state.service';
import { pollingData } from '../../constants/polling-data';
import { Router, RouterLink } from '@angular/router';
import { ButtonComponent } from '../../library/components/button/button.component';
import { ButtonTypes } from '../../library/constants/button-types.enum';
import { ButtonSizes } from '../../library/constants/button-size.enum';

@Component({
  selector: 'app-polling',
  standalone: true,
  templateUrl: './polling.component.html',
  imports: [RouterLink, ButtonComponent],
})
export class PollingComponent {
  stateService = inject(StateService);
  router = inject(Router);

  BUTTON_TYPES = ButtonTypes;
  BUTTON_SIZES = ButtonSizes;

  startPolling() {
    this.stateService.pollingSig.set(pollingData);
  }

  chooseAnswer(index: number) {
    const options = this.stateService.pollingSig()?.options ?? [];
    this.stateService.pollingSig.set(options[index] ?? null);

    if (this.stateService.pollingSig()?.bookId) {
      this.router.navigate(['books', this.stateService.pollingSig()?.bookId]);
      this.stateService.pollingSig.set(null);
    }
  }
}
