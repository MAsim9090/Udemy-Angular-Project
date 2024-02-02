import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-server',
  // selector: '.app-server',
  standalone: true,
  imports: [CommonModule,
    FormsModule],
  templateUrl: './server.component.html',
  // styleUrl: './server.component.css'
  styles: [`h3{
    color:  gray;
  }`]
})
export class ServerComponent {

  // Server status check

  serverId: number = 10;
  serverStatus: string = 'offline';


  username = '';
  serverUser: any = [];
  textShow = false;
  displayNumber = 0;
  displayArray : any = [];

  serverGet: any = [];
  
  userFieldCheck(){
    this.serverUser.push(this.username);
    localStorage.setItem('serverStorage', JSON.stringify(this.username));

    let serverGetStr: any = localStorage.getItem('serverStorage')
    this.serverGet.push(JSON.parse(serverGetStr));
    // this.serverStr.push(JSON.parse(serverGet));
    this.username = '';
  }

  getServerStatus(){
    return this.serverStatus;
  }

  displayDetail(){
    this.textShow = !this.textShow;
    console.log(this.displayNumber);
    this.displayArray.push(this.displayNumber++);
  }


  // degugging 
  
  servers: any = [];

  onAddServer() { 
    this.servers.push('Another Server');
  }

  onRemoveServer(id: number) {
    let position = id - 1;
    this.servers.splice(position, 1);
  }

}
