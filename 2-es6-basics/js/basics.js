/* var, let and const */
console.log('*********************** var, let and const *******************************');
var myName = 'Abhishek';
console.log(myName)
myName = 'Roopali';
console.log(myName)


let myName1 = 'Abhishek';
console.log(myName1)
myName1 = 'Roopali';
console.log(myName1)


const myName2 = 'Abhishek';
console.log(myName1)
//myName2 = 'Roopali';
//console.log(myName2);

/* Arrow Function */
console.log('*********************** Arrow Function *******************************');
function printMyName(name){
    console.log(name)
}
printMyName('Abhishek');


const printMyNameC = (name) => {
    console.log(name)
}
printMyNameC('Abhishek');

let printMyNameL = (name) => {
    console.log(name)
}
printMyNameL('Abhishek');

console.log('*********************** Arrow Function with no argument *******************************');
const printMyNameC0 = () => {
    console.log("Abhishe")
}
printMyNameC0();

let printMyNameL0 = () => {
    console.log('Abhishek')
}
printMyNameL0();


console.log('*********************** Arrow Function with only one argument *******************************');
//with only one argument, you can skip the ()
const printMyNameC1 = name => {
    console.log(name)
}
printMyNameC1('Abhishek');

console.log('*********************** Arrow Function with multiple argument *******************************');
const printMyNameC2 = (name,age) => {
    console.log(name, age);
}
printMyNameC2('Abhishek',39);

console.log('*********************** Arrow Function with return *******************************');
const multiply = (number) => {
    console.log("Multiply " + number);
    return number*2;
}
console.log(" 5 * 2  = "+ multiply(5));

console.log('*********************** Arrow Function with only return statement *******************************');
// remove the {} and the return statement
const multiply1 = (number) => number*3;
console.log(" 5 * 3  = "+ multiply1(5));
console.log('*********************** Modular Code *******************************');