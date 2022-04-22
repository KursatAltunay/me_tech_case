import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BrandBanner } from 'src/app/services/home/banner/model/brandBanner';

@Injectable({
  providedIn: 'root'
})
export class HomeCommunicationService {

  private readonly imageList$ = new BehaviorSubject<any[]>([]);


  constructor() { }

  setImageList(imageList: any[]) {
    this.imageList$.next(imageList)
  }

  getImageList(): Observable<any[]> {
    return this.imageList$.asObservable()
  }
}
