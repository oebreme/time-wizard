import { Component, Input } from '@angular/core';
import { DatePipe } from "@angular/common";
import { environment } from "../../environments/environment";
import packageJson from '../../../package.json';

@Component({
  selector: 'time-wizard-footer',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  debugEnabled: boolean = environment.debugEnabled;
  version: string = packageJson.version;
  @Input() parseResult?: number;
  @Input() remainingMilliseconds?: number;
}
