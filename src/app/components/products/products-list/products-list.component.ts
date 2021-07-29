import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AppDataState, DataStateEnum} from '../../../state/product.state';
import {Product} from '../../../model/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productsInput$:Observable<AppDataState<Product[]>> |null=null;
  //@Output() productsEventEmitter:EventEmitter<ActionEvent> =new EventEmitter<ActionEvent>();

  readonly DataStateEnum=DataStateEnum;
// eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }
// eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }

  /*
  onSelect(p: Product) {
    this.productsEventEmitter.emit({
      type: ProductActionsTypes.SELECT_PRODUCT,payload:p
    });
  }



  onDelete(p: Product) {
    this.productsEventEmitter.emit({
      type: ProductActionsTypes.DELETE_PRODUCT,payload:p
    });
  }

  onEdit(p: Product) {
    this.productsEventEmitter.emit({
      type: ProductActionsTypes.EDIT_PRODUCT,payload:p
    });
  }

  onActionEvent($event: ActionEvent) {
    this.productsEventEmitter.emit($event);
  }
  */

}
