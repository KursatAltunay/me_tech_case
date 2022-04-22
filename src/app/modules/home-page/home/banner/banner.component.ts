import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { BrandBanner } from 'src/app/services/home/banner/model/brandBanner';
import { HomeCommunicationService } from '../../../../core/service/home-communication.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  providers: [NgbCarouselConfig]
})

export class BannerComponent implements OnInit, OnDestroy {

  showNavigationArrows = false;
  showNavigationIndicators = true;
  maxCount = 3;
  bannerInterval = 3000;
  brandLogoInterval;
  brands = [
    {
      id: 1, isSelected: false, name: "hanuta", imagePath: "../../../../../assets/banner/hanuta_logo.png", banners: [
      ]
    },
    {
      id: 2, isSelected: true, name: "ferrero", imagePath: "../../../../../assets/banner/ferrero_logo.png", banners: [
        '../../../../../assets/banner/banner.png',
        'https://picsum.photos/id/1055/900/500',
        'https://picsum.photos/id/194/900/500',
      ]
    },
    {
      id: 3, isSelected: false, name: "caprisun", imagePath: "../../../../../assets/banner/caprisun_logo.png", banners: [

      ]
    },
    {
      id: 4, isSelected: false, name: "ferrero_küsschen", imagePath: "../../../../../assets/banner/ferrero_kusschen_logo.png", banners: [
      ]
    },
    {
      id: 5, isSelected: false, name: "giotto", imagePath: "../../../../../assets/banner/giotto_logo.png", banners: [
      ]
    },
    {
      id: 6, isSelected: false, name: "redbull", imagePath: "../../../../../assets/banner/redbull_logo.png", banners: [
      ]
    },
    {
      id: 7, isSelected: false, name: "kinder", imagePath: "../../../../../assets/banner/kinder_logo.png", banners: [
      ]
    },
    {
      id: 8, isSelected: false, name: "duplo", imagePath: "../../../../../assets/banner/duplo_logo.png", banners: [
      ]
    },
    {
      id: 9, isSelected: false, name: "loacker", imagePath: "../../../../../assets/banner/loacker_logo.png", banners: [
      ]
    },
  ]

  brandBanners: BrandBanner[] = [];
  imageList: any[] = [];
  displayBanners = [];

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;
  destroyed$ = new Subject();

  constructor(private homeCommunicationService: HomeCommunicationService) {
  }
  ngOnInit(): void {
    this.getImageList();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  getImageList() {
    this.homeCommunicationService.getImageList()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(res => {
        if (res.length > 0) {
          this.imageList = res;
          this.generateBanners();
          this.setDisplayBanners();
        }

      })
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
    this.setDisplayBanners();
  }
  brandClick(index) {
    const activeBrand = this.brands.find(x => x.isSelected == true);
    activeBrand.isSelected = false;
    this.brands[index].isSelected = true;
    this.setDisplayBanners();
  }

  generateRandomCount(max: number) {
    return Math.floor(Math.random() * max) + 1;
  }

  generateRandomImages(count: number) {
    const randomCount = this.generateRandomCount(this.imageList.length - this.maxCount);
    let banner = [];
    for (let i = randomCount; i < randomCount + count; i++) {
      const element = this.imageList[i];
      banner.push(element.source)
    }
    return banner;
  }

  generateBanners() {
    this.brandBanners = this.brands.map(x => {
      return {
        id: x.id,
        source: x.id == 2 ? [...x.banners] : this.generateRandomImages(this.generateRandomCount(this.maxCount))
      }
    })
  }

  setBrandInterval() {
    this.brandLogoInterval = setTimeout(() => {
      this.navigateBrand("next");
    }, (this.displayBanners.length + 1) * this.bannerInterval);

  }
  clearCounter() {
  }

  setDisplayBanners(activeBrandId?: number) {
    const id = activeBrandId ? activeBrandId : this.brands.find(x => x.isSelected == true).id;
    this.displayBanners = [...this.brandBanners.find(x => x.id == id).source];
    clearInterval(this.brandLogoInterval);
    this.setBrandInterval();
  }

}


