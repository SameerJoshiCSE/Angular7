import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedValue=new EventEmitter<string>();
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
}
