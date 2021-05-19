import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedValue = 'person';
  onView(feature:string){
    this.loadedValue=feature;
  }
}
