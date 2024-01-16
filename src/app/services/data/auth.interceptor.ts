import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const localStorageService = inject(LocalStorageService);

  const token = localStorageService.get('token') ?? '';
  request = request.clone({
    setHeaders: {
      Authorization: token ? `Token ${token}` : '',
    },
  });

  return next(request);
};
