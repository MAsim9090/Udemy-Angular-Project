import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  standalone: true,
  imports: [
    CommonModule
  ],
  styleUrl: './even.component.css'
})
export class EvenComponent {
 @Input() number!: number;
}
