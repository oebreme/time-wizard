import { Component, Input } from '@angular/core';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'time-wizard-countdown-element',
  standalone: true,
  imports: [
    DatePipe,
  ],
  templateUrl: './countdown-element.component.html',
})
export class CountdownElementComponent {
  @Input({ required: true}) time: number = 0;
  @Input() format?: string;
  @Input() formatDisplayName?: string;
}
