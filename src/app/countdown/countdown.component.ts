import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { JsonPipe } from "@angular/common";
import dayjs from "dayjs";
// @ts-ignore
import advancedParser from "dayjs-parser";
import {CountdownElementComponent} from "../countdown-element/countdown-element.component";

@Component({
  selector: 'time-wizard-countdown',
  standalone: true,
  imports: [
    JsonPipe,
    CountdownElementComponent,
  ],
  templateUrl: './countdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownComponent {

  paramValue: any = 'day';
  parseResult: any = {};

  @Input()
  set date(someDate: string) {
    this.parseResult = dayjs(someDate);
    this.paramValue = someDate;
  }

  constructor() {
    dayjs.extend(advancedParser);
  }
}
