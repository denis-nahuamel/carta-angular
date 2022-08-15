import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': 'f00157bf7721455aa324b7f04d4d8e46',
    }),
  };

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any> {
    return this.http.get(
      'https://api.spoonacular.com/recipes/complexSearch?apiKey=f00157bf7721455aa324b7f04d4d8e46'
    );
  }
}
