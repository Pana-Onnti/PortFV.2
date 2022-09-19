import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../interface/educacion';
@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  private apiURL= 'http://localhost:3000/estudios';
  constructor(private http: HttpClient) {
   }

  getEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.apiURL);
  }

}
