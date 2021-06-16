import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { appServices } from '../services/app.shopping.recipe.service';
import { Recipe, User } from '../shared/app.classes';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor(private appService:appServices) { }

  userName="";
  password="";
  message="";
  flag=1;
  date=new Date();
  ngOnInit(): void {
  }

  transform() {
    if(this.userName.length==0 || this.password.length==0){
      this.message= "Please Enter valid Username or Password"
    }
    else if(this.password.length<8){
      this.message= "Password is less than 8 characters";
    }
    else if(this.appService.users.find(o=>o.uname===this.userName && o.pass===this.password)){
      this.message= "You Successfully Logged In with user name: "+this.message;
      this.flag=0;
    }
    else{
      this.message= "User Does not Exist";
    }
  }
  // catchError(val=> of('I caught error'))
  // example=this.value.pipe();
  // subscribe = this.example.subscribe(val => console.log(val));
}
