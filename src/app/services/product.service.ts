import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private targetURL = "api/home/product";

  constructor(private http: HttpClient) { }

    addProduct(product: Product): Observable<Product> {
    console.log('post Product');
    const url = `${this.targetURL}/create`;
    return this.http.post<Product>(url, product).pipe();
  }

  updateProduct(product: Product): Observable<Product> {
    console.log('update Product');
    const url = `${this.targetURL}/update`;
    return this.http.put<Product>(url, product).pipe();
  }

    deleteProduct(id: number): Observable<number> {
    console.log('delete Products');
    const url = `${this.targetURL}/delete/${id}`;
    console.log('Url '+ url);
    return this.http.delete<number>(url).pipe();
  }

    getAllProducts(): Observable<Product[]> {
    console.log('get Products');
    const url = `${this.targetURL}/getAllProducts`;
    return this.http.get<Product[]>(url);
  }

}
