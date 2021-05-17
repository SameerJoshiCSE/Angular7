import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedValue = 'book';
  onView(feature:string){
    this.loadedValue=feature;
  }
}
