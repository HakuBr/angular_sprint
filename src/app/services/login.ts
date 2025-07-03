import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Usuario } from '../models/user';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Login {
  http = inject(HttpClient)

  login( nome: string, senha : string ): Observable<Usuario>{
    return this.http.post<Usuario>("https://localhost:3002/login", { nome, senha })
    .pipe(
      tap(
        (user) => {
          sessionStorage.setItem("email", user.email )
        }
      )
    )

  }

  constructor() { }
}
