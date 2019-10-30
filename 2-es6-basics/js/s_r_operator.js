console.log("********************** Spread Operator *************************")

const number = [1,2,3,4,5]
const newNumber = [...number, 6,7]
console.log("number = " + number);
console.log("newNumber = " + newNumber);

const person = {
    name : 'Abhishek',
    age : 39
}

const newPerson = {
    ...person,
    gender:'Male'
}

const newNewPerson = {
    ...person,
    age:22,
    gender:'Male'
}



console.log("person = " + JSON.stringify(person));
console.log("newPerson = " + JSON.stringify(newPerson));
console.log("newNewPerson = " + JSON.stringify(newNewPerson));

console.log("********************** Rest Operator *************************")
const filter = (...args) => {
    return args.filter(el => el ===1);
}

console.log(filter(1,2,3,1,5,7,1))