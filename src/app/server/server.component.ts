import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [CommonModule,
    FormsModule],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {

  username = '';
  textShow = false;
  displayNumber = 0;
  displayArray : any = [];

  userFieldCheck(){
    this.username = '';
  }

  displayDetail(){
    this.textShow = !this.textShow;
    console.log(this.displayNumber);
    this.displayArray.push(this.displayNumber++);
  }

}
