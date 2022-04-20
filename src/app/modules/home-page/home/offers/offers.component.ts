import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  offers = [
    { id: 1, name: "offer1", description: "Sezon Ürünleri", image: "../../../../../assets/offers/1.png" },
    { id: 2, name: "offer2", description: "Fresh Ürünler", image: "../../../../../assets/offers/2.png" },
    { id: 2, name: "offer3", description: "İçecekler", image: "../../../../../assets/offers/3.png" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
