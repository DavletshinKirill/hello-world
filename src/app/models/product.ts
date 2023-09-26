export class Product {
  id!: number;
  name: string;
  price: number;
  image: string;
  description: string;

  constructor(name: string, price: number, description: string, image: string) {

    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}
