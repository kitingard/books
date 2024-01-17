import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StateService } from './services/state/state.service';
import { DataService } from './services/data/data.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalNames } from './constants/modal-names.enum';

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
  ],
})
export class AppComponent {
  stateService = inject(StateService);
  dataService = inject(DataService);
  localStorageService = inject(LocalStorageService);
  title = 'books';
  MODAL_NAMES = ModalNames;

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
