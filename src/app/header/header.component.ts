import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedValue=new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature:string){
    this.selectedValue.emit(feature);
  }
}
