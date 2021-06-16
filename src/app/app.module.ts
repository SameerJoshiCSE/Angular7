import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FoodComponent } from './food/food.component';
import { FoodListComponent } from './food/food-list/food-list.component';
import { FoodNameComponent } from './food/food-list/food-name/food-name.component';
import { FoodAddEditComponent } from './food/food-list/food-add-edit/food-add-edit.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { BookEditComponent } from './book/book-list/book-edit/book-edit.component';
import { BookNameComponent } from './book/book-list/book-name/book-name.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonDetailsComponent } from './person/person-details/person-details.component';
import { PersonNameComponent } from './person/person-list/person-name/person-name.component';
import { PersonEditComponent } from './person/person-list/person-edit/person-edit.component';
import { ItemComponent} from './item/item.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemNameComponent } from './item/item-list/item-name/item-name.component';
import { ItemAddEditComponent } from './item/item-list/item-add-edit/item-add-edit.component';
import { Book } from './book/shared/book.module';
import { ItemDetailsComponent } from './item/item-details/item-details.component';
import { appRoutingModult } from './app.routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoodComponent,
    FoodListComponent,
    FoodNameComponent,
    FoodAddEditComponent,
    BookComponent,
    BookDetailsComponent,
    BookEditComponent,
    BookNameComponent,
    BookListComponent,
    PersonComponent,
    PersonListComponent,
    PersonDetailsComponent,
    PersonNameComponent,
    PersonEditComponent,
    ItemAddEditComponent,
    ItemComponent,
    ItemListComponent,
    ItemNameComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoutingModult
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
