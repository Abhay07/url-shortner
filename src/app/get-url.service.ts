import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GetUrlService {
  
  
  constructor(private http: HttpClient) { }
  getUrl(a){
  	return this.http.post('https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyA2lXkjb5spsYBqXoMMdpbFx_ocOMteBwE',{"longUrl": a}).toPromise()
  }


}
