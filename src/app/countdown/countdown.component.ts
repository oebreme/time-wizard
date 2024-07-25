import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { DatePipe } from "@angular/common";
import dayjs from "dayjs";
// @ts-ignore
import advancedParser from "dayjs-parser";
import { CountdownElementComponent } from "../countdown-element/countdown-element.component";
import { FooterComponent } from "../footer/footer.component";
import { interval, takeWhile } from "rxjs";

@Component({
  selector: 'time-wizard-countdown',
  standalone: true,
  imports: [
    CountdownElementComponent,
    DatePipe,
    FooterComponent,
  ],
  templateUrl: './countdown.component.html',
})
export class CountdownComponent implements OnInit {

  parseDatetimeResult: any = {};
  remainingMilliseconds: number = 0;

  @Input()
  set dateTime(someDate: string) {
    this.parseDatetimeResult = dayjs(someDate).subtract(2, 'hours');
  }

  constructor() {
    dayjs.extend(advancedParser);
  }

  ngOnInit(): void {
    this.remainingMilliseconds = this.calculateRemainingMilliseconds();
    this.countdown();
  }

  private calculateRemainingMilliseconds(): number {
    const now: number = Date.now();
    const target: number = this.parseDatetimeResult.valueOf();

    return this.calculateDifferenceWithFloorZero(target, now);
  }

  private countdown(): void {
    const ONE_SECOND_AS_MS: number = 1000;
    interval(ONE_SECOND_AS_MS).pipe(
      takeWhile(() => this.remainingMilliseconds > ONE_SECOND_AS_MS)
        ).subscribe(() => {
        this.remainingMilliseconds = this.calculateRemainingMilliseconds();
    });
  }

  private calculateDifferenceWithFloorZero(a: number, b: number): number {
    return Math.max(0, a - b);
  }

  remainingYearsFromMilliseconds(milliseconds: number): number {
    return Math.floor(milliseconds / (1000 * 60 * 60 * 24 * 365));
  }

  remainingDaysFromMilliseconds(milliseconds: number): number {
    return Math.floor((milliseconds % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
  }

  remainingHoursFromMilliseconds(milliseconds: number): number {
    return Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }

  remainingMinutesFromMilliseconds(milliseconds: number): number {
    return Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  }

  remainingSecondsFromMilliseconds(milliseconds: number): number {
    return Math.floor((milliseconds % (1000 * 60)) / 1000);
  }
}
