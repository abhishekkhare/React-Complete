console.log("********* Pass by value [Primitives] *****************")
let number = 1;
let num = number;
console.log(number);
console.log(num);
number =5
console.log(number);
console.log(num);
console.log("********* Pass by reference [Object and Array] *****************")
let person = {name:"Abhishek"}
let secondPerson = person;
console.log(JSON.stringify(person))
console.log(JSON.stringify(secondPerson))
person.name = "Roopali"
console.log(JSON.stringify(person))
console.log(JSON.stringify(secondPerson))

let num1 = [1,2,3];
let num2 = num1;
console.log(num1);
console.log(num2);
num1[2] = 4
console.log(num1);
console.log(num2);
console.log("********* Pass by value [Object and Array] using spread operator *****************")

let person1 = {name:"Abhishek"}
let secondPerson1 = {...person1};
console.log(JSON.stringify(person1))
console.log(JSON.stringify(secondPerson1))
person1.name = "Roopali"
console.log(JSON.stringify(person1))
console.log(JSON.stringify(secondPerson1))

let num11 = [1,2,3];
let num12 = [...num11];
console.log(num11);
console.log(num12);
num11[2] = 4
console.log(num11);
console.log(num12);