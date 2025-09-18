import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [],
  templateUrl: './clock.html',
  styleUrl: './clock.css'
})
export class Clock implements OnInit,OnDestroy{

  currentTime: string = '';
  private intervalId!: number;

  ngOnInit(): void {
    this.intervalId = setInterval(()=>{
     this.currentTime = new Date().toLocaleTimeString()
    },1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId)
    console.log(`Clock Stopped`)
  }

}
