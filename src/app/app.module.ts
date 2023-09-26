import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialDesignModule } from './material-design/material-design.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodsPageComponent } from './components/goods-page/goods-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoodsEditorComponent } from './components/editors/goods-editor/goods-editor.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { GoodsPageCardsComponent } from './components/goods-page-cards/goods-page-cards.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { DeleteProductComponent } from './components/editors/delete-product/delete-product.component';
import { ShowOrderComponent } from './components/editors/show-order/show-order.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    GoodsPageComponent,
    GoodsEditorComponent,
    LoginComponent,
    GoodsPageCardsComponent,
    ProductPageComponent,
    DeleteProductComponent,
    ShowOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialDesignModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
