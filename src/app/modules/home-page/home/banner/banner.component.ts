import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  providers: [NgbCarouselConfig]
})
export class BannerComponent implements OnInit {

  constructor(ngbCarouselConfig: NgbCarouselConfig) {
    ngbCarouselConfig.interval = 0;
  }

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);


  brands = [
    { id: 1, isSelected: false, name: "hanuta", imagePath: "../../../../../assets/banner/hanuta_logo.png" },
    { id: 2, isSelected: true, name: "ferrero", imagePath: "../../../../../assets/banner/ferrero_logo.png" },
    { id: 3, isSelected: false, name: "caprisun", imagePath: "../../../../../assets/banner/caprisun_logo.png" },
    { id: 4, isSelected: false, name: "ferrero_küsschen", imagePath: "../../../../../assets/banner/ferrero_kusschen_logo.png" },
    { id: 5, isSelected: false, name: "giotto", imagePath: "../../../../../assets/banner/giotto_logo.png" },
    { id: 6, isSelected: false, name: "redbull", imagePath: "../../../../../assets/banner/redbull_logo.png" },
    { id: 7, isSelected: false, name: "kinder", imagePath: "../../../../../assets/banner/kinder_logo.png" },
    { id: 8, isSelected: false, name: "duplo", imagePath: "../../../../../assets/banner/duplo_logo.png" },
    { id: 9, isSelected: false, name: "loacker", imagePath: "../../../../../assets/banner/loacker_logo.png" },
  ]


  ngOnInit(): void {
  }

  navigateBrand(navigation: string) {
    const activeBrand = this.brands.find(x => x.isSelected == true);
    const indexOfActiveBrand = this.brands.indexOf(activeBrand);

    switch (navigation) {
      case "back":
        if (indexOfActiveBrand == 0) {
          this.brands[this.brands.length - 1].isSelected = true;
        }
        else {
          this.brands[indexOfActiveBrand - 1].isSelected = true;
        }
        break;
      case "next":
        if (indexOfActiveBrand == this.brands.length - 1) {
          this.brands[0].isSelected = true;
        }
        else {
          this.brands[indexOfActiveBrand + 1].isSelected = true;
        }
        break;
    }
    activeBrand.isSelected = false;
  }

  brandClick(index) {
    const activeBrand = this.brands.find(x => x.isSelected == true);
    activeBrand.isSelected = false;
    this.brands[index].isSelected = true;
  }

}
