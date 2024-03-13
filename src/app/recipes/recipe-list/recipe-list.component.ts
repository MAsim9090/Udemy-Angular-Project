import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipesModule } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    CommonModule,
    RecipeItemComponent
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  
  constructor(){}
  ngOnInit(){

  }

  @Output() recipeWasSelected:any = new EventEmitter<RecipesModule>();
  recipes: RecipesModule[] = [
    new RecipesModule('Recipe Name', 'Recipe Description','https://picturetherecipe.com/wp-content/uploads/2020/04/Vanilla-Cardamom-Kulfi-PTR-Featured-680x900.jpg'),
    new RecipesModule('Recipe Name 2', 'Recipe Description 2','https://picturetherecipe.com/wp-content/uploads/2020/04/Vanilla-Cardamom-Kulfi-PTR-Featured-680x900.jpg'),
  ];

  onRecipeSelected(recipe: RecipesModule){
    this.recipeWasSelected.emit(recipe);
  }

}
