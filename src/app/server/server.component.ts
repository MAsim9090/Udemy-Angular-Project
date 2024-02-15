import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServerElementComponent } from '../server-element/server-element.component';
import { CockpitComponent } from '../cockpit/cockpit.component';
import { GameControlComponent } from '../game-control/game-control.component';
import { EvenComponent } from '../even/even.component';
import { OddComponent } from '../odd/odd.component';

@Component({
  selector: 'app-server',
  // selector: '.app-server',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ServerElementComponent,
    CockpitComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent],
  templateUrl: './server.component.html',
  // styleUrl: './server.component.css'
  styles: [`h3{
    color:  gray;
  }`]
})
export class ServerComponent {

  // constructor(public serverElement: ServerElementComponent){}

  // Server status check

  serverId: number = 10;
  serverStatus: string = 'offline';

  username: any = '';
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

 // section 5 custom property and custom events

 serverElements: any = [];
 evenNumbers: number[] = []
 oddNumbers: number[] = []

 serverElement = [{
   type: 'server', name: 'TestServer', content: 'Just a test content'
 }];

 onServerAdded(serverData: { serverName: string, serverContent: string }){
   this.serverElements.push({
     type: 'server',
     name: serverData.serverName,
     content: serverData.serverContent
   }) 

   console.log('serverAdded:',this.serverElements)
 }

 onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }){
   this.serverElements.push({
     type: 'blueprint',
     name: blueprintData.serverName,
     content: blueprintData.serverContent
   }) 
 }


  //  LifeCycle Hooks

  onChangeFirst(){
    this.serverElements[0].name = 'Changed!!!';
  }

  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }


  // game-control

  onIntervalFired(firedNumber: number){
    console.log(firedNumber)
    if(firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber)
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }

}
