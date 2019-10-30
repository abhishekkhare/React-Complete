class Human {
    constructor() {
        this.gender = 'Male';
        this.age = 39
    }

    printAge() {
        console.log(this.age);
    }

    printGender() {
        console.log(this.gender);
    }
}


class Person extends Human {
    constructor() {
        super();//this is always required in case of extends
        this.name = "Abhishek";
        this.age = 22;
    }

    printName() {
        console.log(this.name)
    }
}

const person = new Person();
person.printName();
person.printAge();
person.printGender();

console.log("************************ ES7 **************************************")

class HumanES7 {
    gender = 'Male';
    age = 39

    printAge = () => {
        console.log(this.age);
    }

    printGender = () => {
        console.log(this.gender);
    }
}


class PersonES7 extends HumanES7 {
    name = "Abhishek";
    age = 22;

    printName = () => {
        console.log(this.name)
    }
}

const personES7 = new PersonES7();
personES7.printName();
personES7.printAge();
personES7.printGender();
