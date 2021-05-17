import { PersonAddress } from "./person.address";

export class Person extends PersonAddress{
    public name;
    public address;
    constructor(name:string,address:string){
        super(address);
        this.name=name;
    }
}