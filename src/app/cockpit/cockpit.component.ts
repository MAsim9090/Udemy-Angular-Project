import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServerElementComponent } from '../server-element/server-element.component';

@Component({
  selector: 'app-cockpit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ServerElementComponent
  ],
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
  encapsulation: ViewEncapsulation.None //Emulated //ShadowDom 
})
export class CockpitComponent {

  newServerName: any = '';
  newServerContent: any = '';

  @ViewChild('ServerContentInput') ServerContentInput! : ElementRef;   //@ViewChild
  
  serverElements: any = [];

  constructor(){}


  // section 5 binding custom events 

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  onAddServer(nameInput: HTMLInputElement){

    console.log('input Name: ', nameInput.value)
    console.log(this.ServerContentInput.nativeElement.value)

    // this.serverElements.push(this.newServerName, this.newServerContent)
    this.serverCreated.emit({
      serverName: nameInput.value,  // localReference
      // serverContent: this.newServerContent,
      serverContent: this.ServerContentInput.nativeElement.value,   // @ViewChild
    })
    this.newServerName = ''; 
    this.newServerContent = ''; 
    nameInput.value = '';

  }


// Local reference template

  // onAddServer(serverNameInput : HTMLInputElement){
    // this.serverElements.push()
    // this.serverCreated.emit({
    //   serverName: serverNameInput.value,
    //   serverContent: this.newServerContent
    // })
  // }

  onAddBlueprint(nameInput: HTMLInputElement){
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    })

    this.newServerName = ''; 
    this.newServerContent = ''; 

  }

}
