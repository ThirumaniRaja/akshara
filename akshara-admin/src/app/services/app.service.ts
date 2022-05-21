import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient) { }

  getData(){
    const url = "http://localhost:3000/login"
    return this.http.get(url);
  }
}
