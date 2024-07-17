import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeComponent } from "./theme/theme.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ThemeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'time-wizard';
}
