import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesModule } from '../../recipe.module';


@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {

@Input() recipe!: RecipesModule;
@Output() recipeSelected = new EventEmitter<void>();

onSelected(){
  this.recipeSelected.emit();
}

}
