import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private readonly products = [
    { id: '1', name: 'A Book', description: 'A good book', price: 29.99 },
    { id: '2', name: 'A T-shirt', description: 'A good T-shirt', price: 9.99 },
  ];
  findAll() {
    return this.products;
  }
  create(itemProduct) {
    this.products.push(itemProduct);
    return this.products;
  }
}
