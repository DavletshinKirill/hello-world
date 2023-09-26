import {Component, ViewChild, AfterViewInit, Renderer2} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Product} from "../../models/product";
import {MatSort} from '@angular/material/sort';
import {MatDialog} from "@angular/material/dialog";
import {GoodsEditorComponent} from "../editors/goods-editor/goods-editor.component";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-goods-page',
  templateUrl: './goods-page.component.html',
  styleUrls: ['./goods-page.component.scss']
})


export class GoodsPageComponent implements AfterViewInit {
  //dataSource = new MatTableDataSource(productsArray);
  displayedColumns: string[] = ['id', 'title', 'price', 'description', 'image'];
  dataSource!: MatTableDataSource<Product>;
  applyStyles = false;


  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private productService: ProductService) {
    this.productService.getAllProducts().subscribe(data => this.setData(data));

  }

  addData() {
    const dialogChangePost = this.dialog.open(GoodsEditorComponent, {
      width: '500px',
      data: new Product("", 0.0, "", "")
    });
    dialogChangePost.afterClosed().subscribe((result: Product) => {
      if (result != null) {
        console.log(result);
        this.productService.addProduct(result).subscribe(
          data => this.productService.getAllProducts().subscribe(data => this.setData(data))
        );
      }
    });
  }

  setData(data: Product[]) {
    this.dataSource = new MatTableDataSource<Product>(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  refactorData(product: Product) {
    const dialogChangePost = this.dialog.open(GoodsEditorComponent, {
      width: '400px',
      data: product
    });
    dialogChangePost.afterClosed().subscribe((result: Product) => {
      if (result != null) {
        console.log(result);
        if (result.price === -1) {
          this.productService.deleteProduct(result.id).subscribe(
            data => this.productService.getAllProducts().subscribe(data => this.setData(data))
          );
        } else {
          this.productService.updateProduct(result).subscribe(
            data => this.productService.getAllProducts().subscribe(data => this.setData(data))
          );
        }
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
  }

  toggleStyles() {
    this.applyStyles = !this.applyStyles; // Toggle the styles on button click
  }


}
