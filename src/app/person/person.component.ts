import { Component, OnInit } from '@angular/core';
import { PersonService} from './service/person.service';
import { Person } from './shared/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [PersonService]
})
export class PersonComponent implements OnInit {

  selectedPerson:Person;
  constructor(private personService:PersonService) { }

  ngOnInit(): void {
    this.personService.personSelected.subscribe(
      (person:Person) =>{
        this.selectedPerson = person;
      }
    )
  }

}
