import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductNotFoundComponent } from './pages/product-not-found/product-not-found.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
