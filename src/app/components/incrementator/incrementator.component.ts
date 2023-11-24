import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementator',
  templateUrl: './incrementator.component.html',
  styles: [],
})
export class IncrementatorComponent implements OnInit {
  @Input() progress = 50;
  @Input() btnClass = 'btn-primary';

  @Output() progressUpdated = new EventEmitter<number>();

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  updateProgress(value: number): void {
    if (this.progress >= 100 && value > 0) this.progress = 100;
    if (this.progress <= 0 && value < 0) this.progress = 0;
    this.progress += value;
    this.progressUpdated.emit(this.progress);
  }

  onChange(value: number): void {
    if (value > 100) this.progress = 100;
    else if (value < 0) this.progress = 0;
    else this.progress = value;

    this.progressUpdated.emit(this.progress);
  }
}
