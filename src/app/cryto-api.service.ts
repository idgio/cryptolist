import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrytoApiService {
  api_key = 'b7532803-8220-44cb-ad77-1072f7fc1fe5';
  
  constructor(private http:HttpClient) { }
  initSources(){
      return this.http.get('v1/cryptocurrency/listings/latest',{
      headers: {'X-CMC_PRO_API_KEY':this.api_key}
    });
  }
}
