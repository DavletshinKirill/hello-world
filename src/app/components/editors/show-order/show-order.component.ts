import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Order, OrderItem} from "../../../models/order";

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.scss']
})
export class ShowOrderComponent {
  displayedColumns: string[] = ['image', 'name', 'amount'];
  finalCoast: number = 0;

  constructor(public dialogRef: MatDialogRef<ShowOrderComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Order) {
    this.countPrice();
  }

  minimizeAmount(element: OrderItem) {
    element.quantity--;
    this.countPrice();
    if (element.quantity === 0) {
    }
  }

  addAmount(element: OrderItem) {
    element.quantity++;
    this.countPrice();
  }

  countPrice() {
        this.finalCoast = 0;
        this.data.products.forEach((item: OrderItem) => {
      this.finalCoast += item.product.price * item.quantity;
    })
  }
}
