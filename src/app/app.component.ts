import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StateService } from './services/state/state.service';
import { DataService } from './services/data/data.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ModalComponent } from './library/components/modal/modal.component';
import { ModalNames } from './library/constants/modal-names.enum';
import { PollingComponent } from './components/polling/polling.component';
import { ButtonComponent } from './library/components/button/button.component';
import { ButtonTypes } from './library/constants/button-types.enum';
import { ButtonSizes } from './library/constants/button-size.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    LoginComponent,
    RegisterComponent,
    ModalComponent,
    PollingComponent,
    ButtonComponent,
  ],
})
export class AppComponent {
  stateService = inject(StateService);
  dataService = inject(DataService);
  localStorageService = inject(LocalStorageService);

  MODAL_NAMES = ModalNames;
  BUTTON_TYPES = ButtonTypes;
  BUTTON_SIZES = ButtonSizes;

  ngOnInit(): void {
    if (this.localStorageService.get('token')) {
      this.dataService.checkIfUserExist().subscribe((response) => {
        this.stateService.currentUserSig.set(response.user);
      });
    } else {
      this.stateService.currentUserSig.set(null);
    }
  }

  logout() {
    this.localStorageService.set('token', '');
    this.stateService.currentUserSig.set(null);
  }

  openModal(modalName: ModalNames) {
    this.stateService.modalSig.set({ name: modalName });
  }
}
