import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  styleUrl: './odd.component.css'
})

export class OddComponent {
  @Input() number!: number;

}
