import { Component, OnInit } from '@angular/core';
import {NgForm} from  '@angular/forms';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'userProfile.component.html',
    styleUrls: ['./userProfile.component.css']
})

export class UserProfileComponent implements OnInit{
    ngOnInit(){
    }
    firstName="Wimukthi";
    lastName="Rajapaksha";
    email="wimukthirajapaksha.wr@gmail.com" ;
    departmentName="CSE" ;
    birthday="1995-12-08" ;
    NIC="953433702V" ;
    position="Student";
    onSubmit(value: any){
      console.log(value);
    }
}
