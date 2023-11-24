// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

// Components
import { IncrementatorComponent } from './incrementator/incrementator.component';
import { DonutGraphicComponent } from './donut-graphic/donut-graphic.component';

@NgModule({
  declarations: [IncrementatorComponent, DonutGraphicComponent],
  exports: [IncrementatorComponent, DonutGraphicComponent],
  imports: [CommonModule, FormsModule, NgChartsModule],
})
export class ComponentsModule {}
