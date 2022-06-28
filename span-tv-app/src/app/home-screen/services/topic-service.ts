import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
// @ts-ignore
import RootObject = TopicObjectResponse.RootObject;

const CONFIGURATION_SERVICE_BASE_URL = 'https://api.unsplash.com';

@Injectable({
  providedIn: 'root',
})
export class TopicService {

  constructor(private http: HttpClient) { }

  getTopics(): Observable<RootObject[]> {
    return this.http.get<RootObject[]>(`${CONFIGURATION_SERVICE_BASE_URL}/topics?page=1&client_id=DhxXHSFGsWRLoQbnD0zUm4R2LEl6BS3shh2D8V8ie5k`);
  }

  getTopicsPhotos(photoEntry:any): Observable<RootObject[]> {
    console.log(photoEntry)
    var lowercaseEntry = photoEntry.toLowerCase();
    return this.http.get<RootObject[]>(`${CONFIGURATION_SERVICE_BASE_URL}/topics/${lowercaseEntry}/photos/?page=1&client_id=DhxXHSFGsWRLoQbnD0zUm4R2LEl6BS3shh2D8V8ie5k`);
  }

  getPhotos(photoEntry:any): Observable<RootObject[]> {
    return this.http.get<RootObject[]>(`${CONFIGURATION_SERVICE_BASE_URL}/search/photos/${photoEntry.query}`);
  }


}
