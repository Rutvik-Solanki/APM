import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { IProduct } from '../product';
import { ProductService } from '../product.service';
@Component({

  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router
             ) { }


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `:${id}`;
    this.product = {


      "productId": 1,
      "productName": "Iphone 14 Pro max",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2023",
      "description": "Iphone 14 pro max .",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/iphon.jfif",
      "imageButtion": true
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
