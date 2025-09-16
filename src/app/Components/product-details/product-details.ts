import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {

  @Input() product!: IProduct;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

}
