function sum(a, b) {
  return a + b;
}

console.log(sum(2, 1)); //makes a sum
console.log(sum("hola", "perro")); //concatenate

//declaring the parameter types

function sumTyped(a: number, b: number): number {
  return a + b;
}
console.log(sumTyped(2, 1)); //makes a sum

//Arrow functions

const arrowSum = (a: number, b: number): number => {
  return a + b;
};

//optional values and values per defect

const optionalMult = (a: number, b?: number, c: number = 2): number => {
  return a * c;
};

console.log(sumTyped(2, 1)); //1 mandatotry and desonc is theoptional

interface ICharacterLOR {
  name: string;
  hp: number;
  renderHP: () => void;
}

function heal(character: ICharacterLOR, healingPoints: number): void {
  character.hp += healingPoints;
}

const newCharacter: ICharacterLOR = {
  name: "perrin del mal",
  hp: 100,
  renderHP: function (): void {
    console.log("puntos de vida", this.hp);
  },
};

heal(newCharacter, 20);
newCharacter.renderHP();
