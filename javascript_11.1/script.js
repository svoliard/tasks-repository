class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = '';
    }
    introduce() {
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`;
    }
    setEmail(email) {
        this.email = email;
    }
    getEmail() {
        return this.email;
    }
};

let person1 = new Person("Eugen", "Danilov", 37);
console.log(person1.introduce());
person1.setEmail("dem.nobil@gmail.com");
console.log(person1.getEmail());