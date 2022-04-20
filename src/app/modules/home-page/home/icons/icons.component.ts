import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  IconContents = [
    {
      id: 1, contentHeader: "30'dan Fazla Marka", contentText: "Greyfood aracılığı ile prestijli markalar raflarınızda yerini alsın!", contentIcon: "../../../../../assets/icons/1.png" },
    { id: 2, contentHeader: "Avantajlı Fiyatlar", contentText: "Dünya markalarının en iyi ürünleri kaliteli ve avantajlı fiyatlarla raflarınızda!", contentIcon: "../../../../../assets/icons/2.png" },
    { id: 3, contentHeader: "Profesyonel Dağıtım", contentText: "Ürünlerimizi araçlara sıgdığı kadar degil, üreticinin kapasitesi kadar sunuyoruz.", contentIcon: "../../../../../assets/icons/3.png" },
    { id: 4, contentHeader: "7/24 Destek", contentText: "Satış öncesi ve sonrası tüm süreçlerde, kişisel müşteri desteği sağlıyoruz!", contentIcon: "../../../../../assets/icons/4.png" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
