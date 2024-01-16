import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../services/data/data.service';
import { StateService } from '../../services/state/state.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  fb = inject(FormBuilder);
  dataService = inject(DataService);
  stateService = inject(StateService);
  localStorageService = inject(LocalStorageService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    this.dataService.login(this.form.getRawValue()).subscribe((response) => {
      this.localStorageService.set('token', response.user.token);
      this.stateService.currentUserSig.set(response.user);
      this.router.navigateByUrl('/');
    });
  }
}
