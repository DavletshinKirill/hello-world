import {Component, Inject} from '@angular/core';
import {Product} from "../../../models/product";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {productsArray} from '../../../data/ProductsArray';
import {DeleteProductComponent} from "../delete-product/delete-product.component";

@Component({
  selector: 'app-goods-editor',
  templateUrl: './goods-editor.component.html',
  styleUrls: ['./goods-editor.component.scss']
})
export class GoodsEditorComponent {
  product!: Product;
  showDelete: boolean = false;
  textButton: string = "Create";

  constructor(public dialogRef: MatDialogRef<GoodsEditorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Product, public dialog: MatDialog) {
    this.product = new Product(data.name, data.price, data.description, data.image);

    if (this.product.name != "") {
      this.showDelete = true;
      this.textButton = "Update"
    }
  }

  ngOnInit() {

  }

  deleteClicked() {
      const dialogChangePost= this.dialog.open(DeleteProductComponent, {
        width: '300px',
        height: '85px'
      });
      dialogChangePost.afterClosed().subscribe((result: boolean) => {
        if (result) {
          this.product.price = -1;
          this.dialogRef.close(this.product);
        }});
  }
}
