import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { BrandBanner } from 'src/app/services/home/banner/model/brandBanner';
import { HomeCommunicationService } from '../../../core/service/home-communication.service';
import { PhotoServiceService } from 'src/app/services/home/service/photo-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageList: any[] = [];


  constructor(
    private photoService: PhotoServiceService,
    private homeCommunicationService: HomeCommunicationService
  ) { }

  ngOnInit(): void {
    this.getRandomImageList();
  }

  getRandomImageList() {
    this.photoService.getRandomImageList().subscribe(res => {
      if (res) {
        this.imageList = res.map(x => {
          return {
            id: +x.id,
            source: 'https://picsum.photos/id/' + x.id + '/900/500',
            author: x.author
          }
        })
        this.homeCommunicationService.setImageList(this.imageList)
      }
    })
  }


}
