import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const bootUrl = "http://localhost:8085/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

public addUser(user){
  return this.http.post(bootUrl, user, { responseType: 'text' as 'json' });
}

public getAllUsers(){
  return this.http.get(bootUrl);
}

public getUser(id){
  return this.http.get(bootUrl + "/" + id);
}
public updateUser(user){
  return this.http.put(bootUrl + "/" + user.id, user, { responseType: 'text' as 'json' });
}
public deleteUser(id){
  return this.http.delete(bootUrl + "/" + id, { responseType: 'text' as 'json' });
}

}
