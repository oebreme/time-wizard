import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'time-wizard-theme',
  standalone: true,
  templateUrl: './theme.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeComponent {
}
