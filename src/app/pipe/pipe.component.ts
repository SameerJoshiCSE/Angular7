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
  ngOnInit(): void {
  }

  onSubmit(){
    
  }
  // catchError(val=> of('I caught error'))
  // example=this.value.pipe();
  // subscribe = this.example.subscribe(val => console.log(val));
}
