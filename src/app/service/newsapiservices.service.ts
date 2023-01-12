import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

//newsapi url
newsApiUrl ="https://newsapi.org/v2/top-headlines?country=in&apiKey=b4971a3296b8465a9039fb30ed335e28"

//technews api url

techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=b4971a3296b8465a9039fb30ed335e28"


//business news api url
businessApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b4971a3296b8465a9039fb30ed335e28"

//news heading
newsheading():Observable<any>
{
  return this._http.get(this.newsApiUrl);
}

//tech news
technews():Observable<any>
{
  return this._http.get(this.techApiUrl);
}

//business news
businessnews():Observable<any>
{
  return this._http.get(this.businessApiUrl);
}
}
