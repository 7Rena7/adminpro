import { Component } from '@angular/core';

@Component({
  selector: 'app-graphics1',
  templateUrl: './graphics1.component.html',
})
export class Graphics1Component {
  labels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  datasets: number[] = [100, 200, 300];
}
