import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { User } from './models/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = 'http://localhost:3000';
  private users: Subject<User[]> = new Subject();

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.url}/get/getUsers`);
  }

  createUsers(user: User): Observable<string> {
    return this.httpClient.post(`${this.url}/create/createUser`, user, {
      responseType: 'text',
    });
  }

  updateUser(user: User): Observable<string> {
    return this.httpClient.put(`${this.url}/update/updateUsers`, user, {
      responseType: 'text',
    });
  }

  deleteUser(): Observable<string> {
    return this.httpClient.delete(`${this.url}/delete/deleteUsers`, {
      responseType: 'text',
    });
  }
}
