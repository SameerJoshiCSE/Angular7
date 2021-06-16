import { Component } from '@angular/core';
import { appServices } from './services/app.shopping.recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[appServices]
})
export class AppComponent {
  title = 'fresh-app';
}
