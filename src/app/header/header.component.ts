import { Component, EventEmitter, Output } from '@angular/core';
import { CockpitComponent } from '../cockpit/cockpit.component';
import { Router,RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
shopping: any;
lsit: any;

  constructor( private route:Router ){ }

 @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

}
