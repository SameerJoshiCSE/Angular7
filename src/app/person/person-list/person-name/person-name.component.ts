import { Component, OnInit,Input, Output } from '@angular/core';
import { PersonService } from '../../service/person.service';
import { Person } from '../../shared/person.model';

@Component({
  selector: 'app-person-name',
  templateUrl: './person-name.component.html',
  styleUrls: ['./person-name.component.css']
})
export class PersonNameComponent implements OnInit {

  @Input() value:Person;
  constructor(private personService:PersonService){};
  ngOnInit(): void {
  }
  onSelected(){
    this.personService.personSelected.emit(this.value);
  }

}
