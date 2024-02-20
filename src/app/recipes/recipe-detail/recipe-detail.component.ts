import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesModule } from '../recipe.module';


@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {

  constructor(){}
  @Input() recipe!: RecipesModule;
}
