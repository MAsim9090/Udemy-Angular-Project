// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Inject } from '@angular/core';


// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     Inject
//   ]
// })

export class RecipesModule {

    public recipeName: string;
    public description: string;
    public imagePath: string;
  
    constructor(recipeName: string, description: string, imagePath: string ){
  
      this.recipeName = recipeName;
      this.description = description;
      this.imagePath = imagePath; 
  
    }
  
}
   