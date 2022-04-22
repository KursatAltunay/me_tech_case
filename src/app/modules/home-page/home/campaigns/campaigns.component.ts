import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { HomeCommunicationService } from '../../../../core/service/home-communication.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { loremIpsum } from "lorem-ipsum";
import { NgImageSliderComponent } from 'ng-image-slider';

loremIpsum(); // generates one sentence

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit, AfterViewInit {

  campaigns = [
    { id: 1, name: "nutella", image: "../../../../../assets/campaigns/1.png" },
    { id: 2, name: "kinder", image: "../../../../../assets/campaigns/2.png" },
    { id: 3, name: "mon_cheri", image: "../../../../../assets/campaigns/3.png" },
  ]

  imageList: any[] = [];
  destroyed$ = new Subject();
  @ViewChild('nav') slider: NgImageSliderComponent;
  mediaChangeDetector = window.matchMedia("(max-width:950px)")

  imageObject = [];

  defaultActiveImage = 3;
  imageSize = { width: "33%", height: 300, space: 10 }
  constructor(
    private homeCommunicationService: HomeCommunicationService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.getImageList();
  }

  ngAfterViewInit(): void {
    this.mediaChangeDetector.addEventListener("change", () => {
      console.log("slider", this.slider, this.mediaChangeDetector.matches)
      this.mediaChangeDetector.matches? this.slider.sliderImageReceivedWidth = "100%" : "33%"
      this.mediaChangeDetector.matches? this.slider.imageMargin = 0 : 10

    })

  }



  getImageList() {
    this.homeCommunicationService.getImageList()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(res => {
        if (res && res.length > 0) {
          this.imageList = res;
          this.expandCampaigns(4);
        }
      })
  }
  expandCampaigns(expandCount: number) {
    for (let i = 0; i < expandCount; i++) {
      const expandItem = this.imageList[this.generateRandomCount(this.imageList.length)];
      this.campaigns.push({ id: this.campaigns.length + 1, name: expandItem.author, image: expandItem.source });
    }

    this.imageObject = this.campaigns.map(x => {
      return {
        image: x.image,
        thumbImage: x.image,
      }
    })
  }

  generateRandomCount(max: number) {
    return Math.floor(Math.random() * max) + 1;
  }

  imageClick(e) {
    console.log("e", e)
  }

}
