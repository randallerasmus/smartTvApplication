import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
// @ts-ignore
import TopicObject = TopicObjectResponse.TopicObject;

const CONFIGURATION_SERVICE_BASE_URL = 'https://api.unsplash.com';
const CLIENT_ID = 'DhxXHSFGsWRLoQbnD0zUm4R2LEl6BS3shh2D8V8ie5k';

@Injectable({
  providedIn: 'root',
})
export class TopicService {

  constructor(private http: HttpClient) {}

  getTopics(): Observable<TopicObject[]> {
    return this.http.get<TopicObject[]>(`${CONFIGURATION_SERVICE_BASE_URL}/topics?page=1&client_id=${CLIENT_ID}`);
  }

  getTopicsPhotos(photoEntry: any): Observable<TopicObject[]> {
    console.log(photoEntry)
    const lowercaseEntry = photoEntry.toLowerCase();

    if(lowercaseEntry.indexOf(' ') >= 0){
      const updatedTopicEntry = lowercaseEntry.replace(/ /g, '-');
      return this.http.get<TopicObject[]>(`${CONFIGURATION_SERVICE_BASE_URL}/topics/${updatedTopicEntry}/photos/?page=1&client_id=${CLIENT_ID}`);
    }

    return this.http.get<TopicObject[]>(`${CONFIGURATION_SERVICE_BASE_URL}/topics/${lowercaseEntry}/photos/?page=1&client_id=${CLIENT_ID}`);
  }
}
