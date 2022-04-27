//arrays
let skills:(string|number|boolean)[]=["car","dog",false ];

skills.push(true);



//Objects
interface Character{
name:string;
hp:number;
skills:string[];
bornCity?: string  //this means its optional
}

const character:Character ={
    name: "dasd",
    hp: 0,
    skills: ["dahh","gsad","dasdasd"]
}

console.table(character);

