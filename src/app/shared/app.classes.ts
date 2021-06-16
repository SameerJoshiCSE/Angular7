class Recipe{
    constructor(public name:string,public ingredients:string){}
}

class Shopping{
    constructor(public name:string,public quantity:number){}
}

class User{
    constructor(public userName:string,public id:number){}
}
export{Recipe,Shopping,User};