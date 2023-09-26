import {Order} from "./order";

export class User {
  id: number;
  username: string;
  orders: Order[];

  constructor(username: string, orders: Order[]) {
    this.username = username;
    this.orders = orders;
  }
}
