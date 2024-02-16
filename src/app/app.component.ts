import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Udemy-Angular-Project';
  loadedFeature = 'recipe';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
