import {Component, OnInit} from '@angular/core';
import {productsArray} from '../../data/ProductsArray'
import {Router} from '@angular/router';
import {Product} from "../../models/product";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  product !: Product;

  constructor(private router: Router) {
  }

  ngOnInit() {

    this.product = productsArray[this.getId() - 1]
  }

    getId(): number {
      const currentPath = this.router.url;
      const numberString = currentPath.match(/\d+/);
      if (numberString) {
        const number = parseInt(numberString[0]);
        console.log(number);
        return number;
      }
      else {
        return -1;
      }
    }
}
