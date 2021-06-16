import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { appServices } from './services/app.shopping.recipe.service';

@Pipe({
  name: 'operations'
})
export class OperationsPipe implements PipeTransform {
  
  constructor(private appService:appServices){}

  transform(userName:string,password:string): any {
    return this.showSome(userName,password).subscribe(val=>console.log(val));
  }
  value=throwError("");
  showSome(userName:string,password:string):Observable<string>{
    if(userName.length==0 || password.length==0){
      return this.value.pipe(catchError(val=> of("Please Enter valid Username or Password")));
    }
    else if(password.length<8){
      return this.value.pipe(catchError(val=> of("Password is less than 8 characters")));
    }
    else if(this.appService.users.find(o=>o.uname===userName && o.pass===password)){
      return this.value.pipe(catchError(val=> of("You Successfully Logged In with user name: "+userName)));
    }
    else{
      return this.value.pipe(catchError(val=> of('User Does not Exist')));
    }
   
  }

}
