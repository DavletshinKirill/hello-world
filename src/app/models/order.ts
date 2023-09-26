import {Product} from "./product";

export class OrderItem {

  product: Product;
  quantity: number;

  constructor(product: Product) {
    this.product = product;
    this.quantity = 1;
  }

}

export class Order {
  id!: number;
  status: string;
  products: OrderItem[];

  constructor(status: string, products: OrderItem[]) {
    this.status = status;
    this.products = products;
  }
}
