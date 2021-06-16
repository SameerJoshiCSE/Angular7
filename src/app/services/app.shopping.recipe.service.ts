import { Recipe, Shopping, User } from "../shared/app.classes";

export class appServices{
    recepies:Recipe[]=[
        new Recipe("Biryani","Rice,Chicken"),
        new Recipe("Pulav","Rice,Daal")
    ];
    shopping:Shopping[]=[
        new Shopping("Rice",2),
        new Shopping("Chicken",2)
    ];

    users=[
        {uname:"Sameer@gmail.com",pass:"SameerJoshi1234"},
        {uname:"Tanmay@gmail.com",pass:"TanmayJoshi1234"},
        {uname:"Rajesh@gmail.com",pass:"SameerJoshi1234"}
      ];
    addRecipe(name:string,ingredients:string){
        this.recepies.push({name:name,ingredients:ingredients});
    }

    addShopping(name:string,quantity:number){
        this.shopping.push({name:name,quantity:quantity});
    }
    removeRecipe(nameValue:string){
        let obj=this.recepies.find(value=>value.name===nameValue);
        if(obj){
            this.recepies.splice(this.recepies.indexOf(obj),1);
        }
    }

    removeAll(){
        this.recepies.splice(0);
    }
}