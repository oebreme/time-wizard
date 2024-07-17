import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'time-wizard-countdown-element',
  standalone: true,
  imports: [
    DatePipe,
  ],
  templateUrl: './countdown-element.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownElementComponent {
  @Input() time?: number;
  @Input() format?: string;
  @Input() formatDisplayName?: string;
}
