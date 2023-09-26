import {Component, ViewChild} from '@angular/core';
import {productsArray} from '../../data/ProductsArray'
import {Order, OrderItem} from "../../models/order";
import {Product} from "../../models/product";
import {GoodsEditorComponent} from "../editors/goods-editor/goods-editor.component";
import {MatDialog} from "@angular/material/dialog";
import {ShowOrderComponent} from "../editors/show-order/show-order.component";

@Component({
  selector: 'app-goods-page-cards',
  templateUrl: './goods-page-cards.component.html',
  styleUrls: ['./goods-page-cards.component.scss']
})
export class GoodsPageCardsComponent {
  dataSourse = productsArray;
  order: Order;
  amountProducts = 0;


  constructor(public dialog: MatDialog) {
    this.order = new Order("new", []);
  }

  addProduct (product: Product) {
    const found = this.order.products.find(item => product.id === item.product.id);
    if(typeof found === 'undefined') {
      this.order.products.push(new OrderItem(product));
    }
    else {
      found.quantity++;
    }
    console.log(this.order.products);
    this.amountProducts++;
  }

  showOrder() {
      const dialogChangePost= this.dialog.open(ShowOrderComponent, {
        data: this.order
      });
  }
}
