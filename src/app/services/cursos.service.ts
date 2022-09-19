import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../interface/cursos';
@Injectable({
  providedIn: 'root'
})

export class CursosService {
  private apiURL= 'http://localhost:3000/Cursos';
  constructor(private http: HttpClient) {
   }

  getCursos():Observable<Curso[]>{
    return this.http.get<Curso[]>(this.apiURL);
  }

}
