import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerComponent } from './server/server.component';

const routes: Routes = [
  {path: 'shopping-edit', component: ShoppingEditComponent},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'cockpit', component: CockpitComponent},
  {path: 'server', component: ServerComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
