// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    data: { title: 'Dashboard', description: 'Dashboard' },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Dashboard', description: 'Dashboard' },
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: { title: 'Progress', description: 'Progress' },
      },
      {
        path: 'graphic1',
        component: Graphics1Component,
        data: { title: 'Graphics', description: 'Graphics' },
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: { title: 'Account Settings', description: 'Account Settings' },
      },
      {
        path: 'promises',
        component: PromisesComponent,
        data: { title: 'Promises', description: 'Promises' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
