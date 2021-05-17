import { EventEmitter } from "@angular/core";
import { Person } from "../shared/person.model";

export class PersonService{
    person:Person[]=[
        new Person("Sameer Joshi","Mumbai")
    ];

    personSelected = new EventEmitter<Person>();
    addPerson(name:string,address:string){
        this.person.push({name:name,address:address});
    }
}