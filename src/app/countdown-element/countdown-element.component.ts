import { Component, Input } from '@angular/core';

@Component({
  selector: 'time-wizard-countdown-element',
  standalone: true,
  templateUrl: './countdown-element.component.html',
})
export class CountdownElementComponent {
  @Input({ required: true}) time: number = 0;
  @Input() displayName?: string;
}
