import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const url = 'https://picsum.photos/v2/list'

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {


  constructor(private http: HttpClient) { }

  getRandomImageList(): Observable<any[]> {
    return this.http.get<any[]>(url)
  }
}
