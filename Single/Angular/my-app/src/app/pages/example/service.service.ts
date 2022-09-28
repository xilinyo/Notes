import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExampleServiceService {
  constructor(private http: HttpClient) {}

  getImages() {
    return this.http.get('https://www.hlapi.cn/api/ecy3');
  }
}
