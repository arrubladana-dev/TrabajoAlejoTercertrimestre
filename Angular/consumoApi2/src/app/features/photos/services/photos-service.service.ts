import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photos } from '../models/photos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PhotosServiceService {

  private API_URL = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Photos[]>{
    return this.http.get<Photos[]>(this.API_URL)
  }
}
