import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { IngreditentModule } from '../ingreditent/ingreditent.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule,
    ShoppingEditComponent,
  ],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  styles: ['ul { list-style:none }']
})
export class ShoppingListComponent {

  ingredients : IngreditentModule[] = [
    new IngreditentModule ('Apple', 10),
    new IngreditentModule ('Mango', 20)
  ];

  constructor(private route: Router){ }
  
  ngOnInit(){  }

  edit(e: any){
    this.route.navigate(['/shopping-edit']);
    console.log(e)
  }

}
