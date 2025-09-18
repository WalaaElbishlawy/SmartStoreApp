import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./Components/navbar/navbar";
import { Footer } from './Components/footer/footer';
import { Clock } from "./Components/clock/clock";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Clock],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Day4');
  showClock: boolean = true;
}
