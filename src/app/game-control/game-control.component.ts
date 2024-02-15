import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  standalone: true,
  imports: [
    CommonModule,
  ],
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {

  @Output() intervalFired = new EventEmitter<number>();
  interval: any;
  lastNumber: number = 0;

  onStartGame(){
   this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onStopGame(){
    clearInterval(this.interval);
  }


}
