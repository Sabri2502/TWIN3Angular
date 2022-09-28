import { Component, OnInit } from '@angular/core';
import { product } from '../model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  public title: string;
  public List: product[];
  constructor() {}

  ngOnInit(): void {
    this.title = 'My App Store';
    this.List = [
      {
        id: 1,
        title: 'T-shirt 1',
        price: 28,
        nbrLike: 4,
        description: 'nice T-shirt',
        category: 'women',
        quantity: 3,
        picture: 'https://i8.amplience.net/i/jpl/jd_392502_a',
      },
      {
        id: 2,
        title: 'T-shirt 2',
        price: 35,
        nbrLike: 17,
        description: 'nice T-shirt',
        category: 'women',
        quantity: 5,
        picture:
          'https://images.bewakoof.com/t1080/women-s-black-tropical-vibes-typography-oversized-t-shirt-493433-1655750394-1.jpg',
      },
      {
        id: 3,
        title: 'T-shirt 3',
        price: 20,
        nbrLike: 8,
        description: 'nice T-shirt',
        category: 'women',
        quantity: 77,
        picture:
          'https://images.bewakoof.com/t640/women-s-black-extinct-graphic-printed-oversized-t-shirt-509023-1655924587-1.jpg',
      },
    ];
  }
  incrementLike(product: product): void {
    let i = this.List.indexOf(product);
    if (i != -1) {
      this.List[i].nbrLike++;
    }
  }
}
