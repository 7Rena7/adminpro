// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { BreadcrumpsComponent } from './breadcrumps/breadcrumps.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [BreadcrumpsComponent, HeaderComponent, SidebarComponent],
  exports: [BreadcrumpsComponent, HeaderComponent, SidebarComponent],
  imports: [CommonModule],
})
export class SharedModule {}
