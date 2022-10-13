import { HttpClient , HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { Verduleria } from '../modelos/verduleria';
@Injectable({
  providedIn: 'root'
})
export class VerduleriaService {
  verduleriaUrl='http://localhost:3000/Verduleria/'

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<Verduleria>(this.verduleriaUrl);
  }

  crearProduct(post):Observable<any>{
    return this.http.post(this.verduleriaUrl,post,this.httpOptions)
    .pipe(
      retry(3)
    );
  }

  updateProduct(id,post): Observable<any>{
    return this.http.put(this.verduleriaUrl+'/posts'+id,post,this.httpOptions).
    pipe(retry(3));
  }

  deleteProduct(id:number){
    return this.http.delete(this.verduleriaUrl+id);
  }
}
