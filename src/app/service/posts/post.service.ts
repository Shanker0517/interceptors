import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  api: string = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) {}
  getPosts(): Observable<any> {
    return this.http.get(this.api);
  }
}
