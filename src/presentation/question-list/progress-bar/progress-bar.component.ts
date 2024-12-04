import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    standalone: true,
})
export class ProgressBarComponent {
  @Input() current: number = 0;
  @Input() total: number = 0;
  @Input() percentage: number = 0;
}
