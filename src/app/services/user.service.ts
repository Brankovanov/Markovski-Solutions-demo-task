import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import {User} from '../User';

const httpOpt = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  deleteUser(user: User): Observable<User>{
    return this.http.delete<User>(this.apiUrl + '/' + user.id);
  }
  editUser(user: User): Observable<User>{
    console.log(user);
    return this.http.put<User>(this.apiUrl + '/' + user.id, user,httpOpt);
  }
  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.apiUrl, user,httpOpt);
  }
}
