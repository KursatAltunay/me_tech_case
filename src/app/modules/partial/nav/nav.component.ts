import { Component, OnInit } from '@angular/core';
import productsDataset from '../../../dummy/products.dataset';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  products = [];

  constructor() {
    this.products = productsDataset;
  }

  ngOnInit(): void {
  }

  getChartCount() {
    return this.products.filter(x => x.count != 0).length
  }

}
