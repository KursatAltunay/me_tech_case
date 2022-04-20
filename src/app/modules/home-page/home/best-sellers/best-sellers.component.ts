import { Component, OnInit } from '@angular/core';
import productsDataset from '../../../../dummy/products.dataset';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss']
})
export class BestSellersComponent implements OnInit {

  products = [];

  constructor() {
    this.products = productsDataset;
  }

  ngOnInit(): void {
  }

  addToChart(productId) {
    this.products.find(x => x.id == productId).count = 1;
  }

  changeChartCount(productId: number, isPlus: boolean) {
    const product = this.products.find(x => x.id == productId)
    isPlus ? product.count++ : product.count--
  }


}
