import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    CommonModule,
    RecipeListComponent,
    RecipeDetailComponent,
  ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

}
