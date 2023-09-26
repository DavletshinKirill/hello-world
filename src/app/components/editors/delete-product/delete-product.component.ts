import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Product} from "../../../models/product";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent {
  constructor(public dialogRef: MatDialogRef<DeleteProductComponent>) {
  }
  onNoClicked() {
    this.dialogRef.close(false);
  }

    onYesClicked() {
      this.dialogRef.close(true);
  }
}
