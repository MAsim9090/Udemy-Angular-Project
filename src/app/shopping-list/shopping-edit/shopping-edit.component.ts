import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  shoppingEditForm = new FormGroup({
    name : new FormControl(''),
    amount : new FormControl(''),
    address : new FormGroup({
      street: new FormControl,
      city: new FormControl
    })
  })

  showAdded = false;
  addedList: any = []

  ingredientAdd(e: any){
    e.preventDefault();
    console.log(this.shoppingEditForm.value);
    this.addedList.push(this.shoppingEditForm.value);
    this.showAdded = true;
  }

  ingredientUpdate() {
  }

  ingredientDelete(){
    
  }

  ingredientClear(){
    
  }
}
