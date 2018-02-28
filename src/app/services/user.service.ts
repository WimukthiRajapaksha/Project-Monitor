import { Injectable , Inject } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Services {

  private http: Http;
  u_id: string;

  constructor(@Inject(Http) http) {
    this.http = http;
  }
  userLogin(data) {      // authenticate userProfile using password and username returns the u_id if exits such userProfile
    return this.http.post('http://localhost:3000/user/log_in', JSON.stringify(data),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }
  getUser() {         // get details of the userProfile for a given u_id (u_id will be taken from the cookie CUR_U_ID)
    return this.http.post('http://localhost:3000/userProfile/get_user', JSON.stringify({u_id: this.u_id}),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }
  getAllUsers() {     // get details of all users except the current userProfile of the system
    return this.http.post('http://localhost:3000/user/get_all_users', JSON.stringify({u_id: this.u_id}),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }
  addUser(data) {     // add new userProfile to the system
    return this.http.post('http://localhost:3000/user/add_user', JSON.stringify(data),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }
  updateUser(data) {     // update userProfile details
    return this.http.post('http://localhost:3000/user/update_user', JSON.stringify(data),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }
}
