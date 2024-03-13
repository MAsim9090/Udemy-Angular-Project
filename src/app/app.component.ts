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

  // odd and even number section 7
  
  numbers = [1,2,3,4,5] 
  oddNumbers = [1,3,5] ;
  evenNumbers = [2,4] ;
  onlyOdd = false;
  value = 10;

}
