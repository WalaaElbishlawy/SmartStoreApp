import { Component } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { ProductCard } from '../../Directives/product-card';
import { CreditCardPipe } from "../../Pipes/credit-card-pipe";
import { ProductDetails } from "../product-details/product-details";

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule, ProductCard, CreditCardPipe, ProductDetails],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
   searchText: string = '';
   today: Date = new Date();
   creditCardNumber = '1234567812345678';

  selectedProduct: IProduct | null = null;

  categories: ICategory[] = [
    { ID: 1, Name: "Electronics" },
    { ID: 2, Name: "Accessories" },
    { ID: 3, Name: "Home Appliances" }
  ];

  //Task 2-a(1)	Property “Product List”
  ProductList : IProduct[] = [
    {
      ID: 1,
      Name: 'Labtop',
      Quantity: 10,
      Price: 25000,
      Img: 'assests/lap.jpg',
      CategoryID: 1
    },
    {
      ID: 2,
      Name: 'Smart Phone',
      Quantity: 0,
      Price: 15000,
      Img: 'assests/smartPhone.jpg',
      CategoryID: 1
    },
    {
      ID: 3,
      Name: 'Blander',
      Quantity: 4,
      Price: 2500,
      Img: 'assests/blander.jpg',
      CategoryID: 3
    },
    {
      ID: 4,
      Name: 'Refrigerator',
      Quantity: 3,
      Price: 45000,
      Img: 'assests/refrigerator.jpg',
      CategoryID: 3
    },
    {
      ID: 5,
      Name: 'IPad',
      Quantity: 7,
      Price: 15000,
      Img: 'assests/ipad.jpg',
      CategoryID: 1
    },
    {
      ID: 6,
      Name: 'AirPods',
      Quantity: 2,
      Price: 2000,
      Img: 'assests/airpods.jpg',
      CategoryID: 2
    }
  ]

  categoryMap: { [key: number]: string } = {};

  constructor() {
    this.categories.forEach(cat => {
      this.categoryMap[cat.ID] = cat.Name;
    });
  }

  //Task 3 (c)-c)	Add buy button with each product, which will decrease the available quantity of the product
  // by 2 each time it clicked on.
  buyProduct(product: IProduct): void {
    if(product.Quantity > 0){
      product.Quantity -= 1;
    }
    if(product.Quantity < 0){
      product.Quantity = 0;
    }
  }

  //Task 4 Make search by product Name by two-way binding in product component.
  get filteredProducts(): IProduct[] {
    return this.ProductList.filter(p =>
      p.Name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  //Task 3(d)	Add details button with each product when clicked, display product details in alert.
  showDetails(product: IProduct): void {
    this.selectedProduct = product;
  }

  hideDetails() {
    this.selectedProduct = null;
  }

}
