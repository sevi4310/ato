import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MsgservService {
  host = "http://localhost:8080";
  httpOptions = {  
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('tt:tt')
  })
}
  constructor(private http: HttpClient) { }

  getPalindromesHello(feedId): Observable<any> {
    // const feed = 'NASDAQ';
    const configUrl = this.host + '/xmessages' ;
    return this.http.get(configUrl, this.httpOptions);
  }

  getPalindromes(query: any, msg: any) : Observable<any> {
     const arr = [{"query": query, "msg": msg}];
    const body = JSON.stringify(arr) ;
    const configUrl =  this.host + '/mp/' + query  + "/" + msg ;
   return this.http.put<any>(configUrl, body, this.httpOptions);
  }
}
