import { Pipe, PipeTransform } from '@angular/core';
import { appServices } from './services/app.shopping.recipe.service';

@Pipe({
  name: 'userValidator'
})
export class UserValidatorPipe implements PipeTransform {
  
  constructor(private appService:appServices){};

  transform(userName: string,password:string):string {
    if(userName.length==0 || password.length==0){
      return "Please Enter valid Username or Password"
    }
    else if(password.length<8){
      return "Password is less than 8 characters";
    }
    else if(this.appService.users.find(o=>o.uname===userName && o.pass===password)){
      return "You Successfully Logged In with user name: "+userName;
    }
    else{
      return "User Does not Exist";
    }
  }

}
