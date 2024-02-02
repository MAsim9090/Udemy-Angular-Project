import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent {

  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName: any = '';

  serverStatus = 'offline'


  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000);
  }

  onUpdateServerName( event: Event ){
   this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreationStatus(){
    console.log('server added', this.serverName)
    this.allowNewServer = true;
    this.serverCreationStatus = 'Server was created with Name is' + this.serverName;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
