import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenus: [
        { title: 'Main', url: '/' },
        { title: 'Progress Bar', url: '/progress' },
        { title: 'Graphics', url: '/graphic1' },
        { title: 'Promises', url: '/promises' },
      ],
    },
  ];

  constructor() {}
}
