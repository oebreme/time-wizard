import { Component, Input, OnInit } from '@angular/core';
import { JsonPipe } from "@angular/common";
import dayjs from "dayjs";
// @ts-ignore
import advancedParser from "dayjs-parser";

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
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
