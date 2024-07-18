import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { JsonPipe } from "@angular/common";
import dayjs from "dayjs";
// @ts-ignore
import advancedParser from "dayjs-parser";
import { CountdownElementComponent } from "../countdown-element/countdown-element.component";
import { interval, takeWhile } from "rxjs";

@Component({
  selector: 'time-wizard-countdown',
  standalone: true,
  imports: [
    JsonPipe,
    CountdownElementComponent,
  ],
  templateUrl: './countdown.component.html',
})
export class CountdownComponent implements OnInit {

  paramValue: any = 'day';
  parseResult: any = {};
  remainingMilliseconds: number = 0;

  @Input()
  set date(someDate: string) {
    this.parseResult = dayjs(someDate).subtract(2, 'hours');
    this.paramValue = someDate;
  }

  constructor() {
    dayjs.extend(advancedParser);
  }

  ngOnInit(): void {
    this.remainingMilliseconds = this.calculateRemainingMilliseconds();
    this.countdown();
  }

  private calculateRemainingMilliseconds(): number {
    const now: number = new Date().getTime();
    const target: number = new Date(this.parseResult).getTime();

    const differenceInMs: number = this.calculateDifferenceWithFloorZero(target, now);
    return differenceInMs;
  }

  private countdown(): void {
    const ONE_SECOND_AS_MS: number = 1000;
    interval(ONE_SECOND_AS_MS).pipe(
      takeWhile(() => this.remainingMilliseconds > ONE_SECOND_AS_MS)
        ).subscribe(() => {
        this.remainingMilliseconds -= ONE_SECOND_AS_MS;
    });
  }

  private calculateDifferenceWithFloorZero(a: number, b: number): number {
    return Math.max(0, a - b);
  }
}
