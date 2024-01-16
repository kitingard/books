import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  platformId = inject(PLATFORM_ID);

  private isPlatformBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  get(key: string): any {
    if (this.isPlatformBrowser()) {
      const item = localStorage.getItem(key);
      if (item) {
        try {
          return JSON.parse(item);
        } catch (e) {
          return item;
        }
      }
    }
    return null;
  }

  set(key: string, value: any): void {
    if (this.isPlatformBrowser()) {
      const serializedValue =
        typeof value === 'object' ? JSON.stringify(value) : value;
      localStorage.setItem(key, serializedValue);
    }
  }

  remove(key: string): void {
    if (this.isPlatformBrowser()) {
      localStorage.removeItem(key);
    }
  }

  clear(): void {
    if (this.isPlatformBrowser()) {
      localStorage.clear();
    }
  }
}
