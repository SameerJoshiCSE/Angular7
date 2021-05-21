import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ItemService } from '../service/item.service';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  items:{id:number,name:string};
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.items={
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    };
    this.route.params.subscribe(
      (params:Params)=>{
        this.items={
          id:this.route.snapshot.params['id'],
          name:this.route.snapshot.params['name']
        };
      }
    );
  }

}
