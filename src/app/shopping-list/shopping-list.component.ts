import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { IngreditentModule } from '../ingreditent/ingreditent.module';
import { Router,RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule,
    ShoppingEditComponent,
    RouterOutlet,
    RouterLink, 
    RouterLinkActive
  ],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  styles: ['ul { list-style:none }']
})
export class ShoppingListComponent {
  constructor(private route: Router){ }
  
  ngOnInit(){  }

  ingredients : IngreditentModule[] = [
    new IngreditentModule ('Apple', 10),
    new IngreditentModule ('Mango', 20)
  ];

  onIngerientAdded(ingredient:IngreditentModule){
    this.ingredients.push(ingredient);
  }

  edit(e: any){
    this.route.navigate(['/shopping-edit']);
    console.log(e)
  }

}
