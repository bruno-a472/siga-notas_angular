import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private apiUrlLogin = 'http://127.0.0.1:5000/api/login'; // URL login
  private apiUrlNotas = 'http://127.0.0.1:5000/api/notas'; // URL notas

  constructor(private http: HttpClient) { }

  enviarLogin(dados: any): Observable<any> {
    return this.http.post<any>(this.apiUrlLogin, dados);
  }
  
  receberNotas(dados: any): Observable<any> {
    return this.http.post<any>(this.apiUrlNotas, dados);
  }

}