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
        id: 1,
        title: 'T-shirt 2',
        price: 35,
        nbrLike: 17,
        description: 'nice T-shirt',
        category: 'women',
        quantity: 5,
        picture:
          'https://assets.ajio.com/medias/sys_master/root/20220405/KevA/624b3cfeaeb26921af0a8476/-78Wx98H-441137206-navy-MODEL.jpg',
      },
      {
        id: 1,
        title: 'T-shirt 3',
        price: 20,
        nbrLike: 8,
        description: 'nice T-shirt',
        category: 'men',
        quantity: 77,
        picture:
          'https://ae01.alicdn.com/kf/H528ef7b06091486f9b72d711eab3fc4eb/Running-Knitted-Short-Sleeve-Polo-Shirt-Men-Fitness-Slim-Fit-Strips-Polo-T-shirt-Male-Fashion.jpg_Q90.jpg_.webp',
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
