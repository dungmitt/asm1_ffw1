import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductNotFoundComponent } from './pages/product-not-found/product-not-found.component';

const routes: Routes = [
  {path: '', component:ProductlistComponent},
  {path: 'add', component:ProductAddComponent},
  {path: ':id/edit', component:ProductEditComponent},
  {path: '**', component:ProductNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
