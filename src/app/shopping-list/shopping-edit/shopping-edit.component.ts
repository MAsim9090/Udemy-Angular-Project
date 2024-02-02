import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { debounce } from 'rxjs';

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
  addedList: any = [];
  addedListShow: any = [];

  ingredientAdd(e: any) {
    e.preventDefault();
    console.log(this.shoppingEditForm.value);
    this.addedList.push(this.shoppingEditForm.value);
    localStorage.setItem('shoppingEdit',JSON.stringify(this.shoppingEditForm.value));
    this.shoppingEditForm.reset();
    console.log(this.addedList);
  }

  ingredientShow(){
    this.showAdded = true;
    let shoppingEditGet: any = localStorage.getItem('shoppingEdit');
    this.addedListShow.push( JSON.parse(shoppingEditGet));
  }

  ingredientUpdate() {
    
  }

  ingredientDelete(){
    
  }

  removeItem(index: any){

    localStorage.getItem('')
    console.log(index);
    alert (index);
    console.log(this.addedList)
    this.addedList.splice(index, 1);
    console.log(this.addedList);
   console.log(localStorage.getItem('shoppingEdit'));
  }

  ingredientClear(){
    // this.addedList.length = 0;
    this.addedList = [];
    console.log(this.addedList)
  }
}
