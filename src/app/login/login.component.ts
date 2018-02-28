import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Services} from './../services/user.service';
import {isUndefined} from 'util';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user_name: string;

    constructor(private router: Router, private userService: Services, private cookieService: CookieService) {

    }

    onSubmit(email, password) {
      if (email === '') {
        document.forms[0].elements['username'].focus();
      }else if (password === '') {
        document.forms[0].elements['password'].focus();
      }else {
        console.log(email);
        console.log("--------");
        console.log(password);
        this.userService.userLogin({email: email, password: password}).subscribe(
          (result) => {
            if (result.reply === 'NO_SUCH_USER') {
              alert('no such userProfile found');
            }else {
              this.cookieService.set('CUR_U_ID', result.reply);
              this.router.navigate(['/dashboard']);
            }
          }, (error) => {
            console.log(error);
          }
        );
      }
    }

  ngOnInit() {
  }

}
