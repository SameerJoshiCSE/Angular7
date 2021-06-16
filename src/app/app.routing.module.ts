import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ItemDetailsComponent } from "./item/item-details/item-details.component";
import { ItemAddEditComponent } from "./item/item-list/item-add-edit/item-add-edit.component";
import { ItemListComponent } from "./item/item-list/item-list.component";
import { ItemNameComponent } from "./item/item-list/item-name/item-name.component";
import { ItemComponent } from "./item/item.component";
const appRoutes:Routes=[
    {path:'item',component:ItemComponent,children:[
      {path:':id/:name',component:ItemDetailsComponent},
      {path:'add',component:ItemAddEditComponent},
      {path:'remove',component:ItemAddEditComponent},
      {path:'edit',component:ItemAddEditComponent}
    ]},
  ];
@NgModule({
imports:[
    RouterModule.forRoot(appRoutes)
],
exports:[
    RouterModule
]
})
export class appRoutingModult{

}