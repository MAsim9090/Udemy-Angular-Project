import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';
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
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName: any = '';

  serverStatus = 'offline';

  

  // section 5
  @Input('srvElement') element!: { type: string, name: string, content: string };
  @Input() name: any;
  @ViewChild('heading', {static: true}) header!: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph!: ElementRef;

  // Lifecycle Hooks


  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit Called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent)
    console.log('Text paragraph: ' + this.paragraph.nativeElement.textContent)
  }

  ngDoCheck() {
    console.log('ngDoCheck Called!')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Called!')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called!')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent)
    console.log('Text paragraph: ' + this.paragraph.nativeElement.textContent)
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Called!')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy Called!')
  }




  serverElements: any = [];

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000);
  }

  


  onUpdateServerName( event: Event ){
   this.serverName = (<HTMLInputElement>event.target).value;
   this.allowNewServer = true;
  }

  onCreationStatus(){
    console.log('server added', this.serverName)
    this.serverCreationStatus = 'Server was created with Name is' + this.serverName;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }


}
