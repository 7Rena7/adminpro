import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
})
export class AccountSettingsComponent implements OnInit {
  themeElement = document.querySelector('#theme');
  indexSelected: number = 1;

  constructor(private settings: SettingsService) {}

  ngOnInit(): void {
    const url =
      localStorage.getItem('theme') || 'assets/css/colors/default.css';
    const theme = url.split('/')[3].split('.')[0];
    this.indexSelected = this.settings.getIndexSelected(theme);
  }

  changeTheme(theme: string, index: number) {
    this.settings.changeTheme(theme);
    this.indexSelected = index;
  }
}
