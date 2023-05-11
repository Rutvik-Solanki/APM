import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Mobile List';
  imageWidth = 50;
  imageMargin: number = 2;
  Imagebutton = true;
  showImage: boolean = false;
  errorMessage: string = ''

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredProducts = this.performFilter(value);
  }
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
   
  constructor(private productService: ProductService){

  }

  toggleImage(): void {
    this.showImage = !this.showImage
  }
  toggleButtion(id: number): void {
    this.products.forEach(product => {
      if (id == product.productId) {
        product.imageButtion = !product.imageButtion;
        this.showImage = true;
      }

    })
  }
  performFilter(filterBy: string): IProduct[] 
  { 
    filterBy = filterBy.toLowerCase(); 
    return this.products.filter((product: IProduct) => 
    product.productName.toLowerCase().includes(filterBy) || product.price.toString().includes(filterBy));
   }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
      
    });
  
    
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List:' + message;
  }
}