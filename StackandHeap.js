// Values are stored in stack

const name='Jhon';
const age =23;

// Reference values are stored on the heap

let person = {
    name: 'Ganesh',
    age: 24,
};
let newName = name;
newName='Jhonathan';
console.log(name, newName);
let newPerson=person;
newPerson.name='Ganesh Malepati';
console.log(person, newPerson);

//Type casting

let amount="100";
let cash=35;
amount=parseInt(amount);
amount=parseFloat(amount);
cash=cash.toString();
console.log(cash, typeof cash);
console.log(amount, typeof amount);
// Converting a String into a number gives NaN not a number
let l='Hello';
l=parseInt(l);
console.log(l, typeof l);
console.log(Math.sqrt(-1));
console.log(1+NaN);
console.log(undefined+undefined);





