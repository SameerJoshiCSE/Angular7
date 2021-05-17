import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PersonService } from '../../service/person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  @ViewChild('name') nameElementRef:ElementRef;
  @ViewChild('addr') addrElementRef:ElementRef;
  constructor(private personService:PersonService) { }

  ngOnInit(): void {
  }

  onAdder(){
    this.personService.addPerson(this.nameElementRef.nativeElement.value,this.addrElementRef.nativeElement.value);
  }
}
