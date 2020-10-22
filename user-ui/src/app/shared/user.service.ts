import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = '/api';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.userUrl);

  }
  
  getUserById(id:number):Observable<User>{
    const url = `${this.userUrl}/${id}`;
  	return this.http.get<User>(url);
  }

  createUser(user:User): Observable<User>{
    return this.http.post<User>(this.userUrl, user, this.httpOptions).pipe(
      tap((newUser:User)=>console.log(`added hero w/ id=${newUser.id}`))
      );
  }
  updateUser(user:User):Observable<any>{
    return this.http.put(this.userUrl, user, this.httpOptions).pipe(
      tap(_ => console.log(`updated hero id=${user.id}`))
    );
  }
}
