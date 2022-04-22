import { Component, OnInit } from '@angular/core';
import productsDataset from '../../../../dummy/products.dataset';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],

})
export class CategoriesComponent implements OnInit {

  menu = [
    { id: 1, name: "Atıştırmalık", image: "../../../../../assets/categories/atistirmalik.png", isSelected: false },
    { id: 2, name: "İçecekler", image: "../../../../../assets/categories/icecekler.png", isSelected: false },
    { id: 3, name: "Gofret", image: "../../../../../assets/categories/gofret.png", isSelected: false },
    { id: 4, name: "Dondurma", image: "../../../../../assets/categories/dondurma.png", isSelected: false },
    { id: 5, name: "Çikolata", image: "../../../../../assets/categories/cikolata.png", isSelected: false },
    { id: 6, name: "Kahve", image: "../../../../../assets/categories/kahve.png", isSelected: false },
    { id: 7, name: "Tüm Kategoriler", image: "../../../../../assets/categories/tüm_kategoriler.png", isSelected: true },
  ]

  products = []
  menuInterval = null;

  constructor() {
    this.products = productsDataset;
  }


  displayProducts: any[] = [];

  ngOnInit(): void {
    this.filterDisplayProducts();

  }

  addToChart(productId) {
    this.products.find(x => x.id == productId).count = 1;
  }

  changeChartCount(productId: number, isPlus: boolean) {
    const product = this.products.find(x => x.id == productId)
    isPlus ? product.count++ : product.count--
  }

  selectMenu(menuId: number) {
    this.menu.find(x => x.isSelected == true).isSelected = false;
    this.menu.find(x => x.id == menuId).isSelected = true;
    this.filterDisplayProducts();
  }
  filterDisplayProducts() {
    const selectedMenuId = this.menu.find(x => x.isSelected == true).id;
    if (selectedMenuId == 7) {
      this.displayProducts = [...this.products]
    }
    else {
      this.displayProducts = this.products.filter(x => x.menuId.includes(selectedMenuId))
    }
    clearTimeout(this.menuInterval);
    this.setMenuInterval();
  }

  navigateMenu(navigation: string) {
    const activeMenu = this.menu.find(x => x.isSelected == true)
    const indexOfActiveMenu = this.menu.indexOf(activeMenu);

    switch (navigation) {
      case "back":
        if (indexOfActiveMenu == 0) {
          this.menu[this.menu.length - 1].isSelected = true;
        }
        else {
          this.menu[indexOfActiveMenu - 1].isSelected = true;
        }
        break;
      case "next":
        if (indexOfActiveMenu == this.menu.length - 1) {
          this.menu[0].isSelected = true;
        }
        else {
          this.menu[indexOfActiveMenu + 1].isSelected = true;
        }
        break;
    }
    activeMenu.isSelected = false;
    this.filterDisplayProducts();
  }


  setMenuInterval() {
    this.menuInterval = setTimeout(() => {
      this.navigateMenu("next")
    }, 4000);
  }

}
