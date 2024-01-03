import { Component } from '@angular/core';
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
export class RecipeListComponent {
  
  constructor(){}
  ngOnInit(){

  }
  recipes: RecipesModule[] = [
    new RecipesModule('Recipe Name', 'Recipe Description','https://picturetherecipe.com/wp-content/uploads/2020/04/Vanilla-Cardamom-Kulfi-PTR-Featured-680x900.jpg')
  ];

}
