function sum(a, b){
 return a+b;
}

console.log(sum(2, 1)); //makes a sum
console.log(sum("hola", "perro")); //concatenate


//declaring the parameter types

function sumTyped(a:number, b:number): number{
 return a+b;
}
console.log(sumTyped(2, 1)); //makes a sum


//Arrow functions

const arrowSum = (a:number,b:number):number => {
    return a+b;
}

//optional values and values per defect

const optionalSum = (a: number, b?: number, c:number=2): number => {
  return a + c;
};

console.log(sumTyped(2, 1)); //1 mandatotry and desonc is theoptional


