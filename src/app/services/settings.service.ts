import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private selectedThemeUrl =
    localStorage.getItem('theme') || 'assets/css/colors/default.css';
  private themeElement = document.querySelector('#theme');

  constructor() {
    this.themeElement?.setAttribute('href', this.selectedThemeUrl);
  }

  changeTheme(theme: string) {
    const url = `assets/css/colors/${theme}.css`;
    this.themeElement?.setAttribute('href', url);
    localStorage.setItem('theme', url);
  }

  getIndexSelected(theme: string): number {
    switch (theme) {
      case 'default':
        return 1;
      case 'green':
        return 2;
      case 'red':
        return 3;
      case 'blue':
        return 4;
      case 'purple':
        return 5;
      case 'megna':
        return 6;
      case 'default-dark':
        return 7;
      case 'green-dark':
        return 8;
      case 'red-dark':
        return 9;
      case 'blue-dark':
        return 10;
      case 'purple-dark':
        return 11;
      case 'megna-dark':
        return 12;
      default:
        return 1;
    }
  }
}
