// // Person Constructor
// function Person(name, lastName, dob) {
//   this.name = name;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
//   // Using a method
//   this.calculateAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1980);
//   }
// }
/*-----------------------------------------------------------------------------------------------------*/
// JavaScript Prototypes
// Calculate age

// Person.prototype.calculateAge = function() {
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 2000);
// }

// const gerard = new Person("Patricia", "Ruiz", "July-15-2000");
// const karla = new Person("Karla", "Sanchez", "July-15-2000");

// console.log(karla);
// console.log(gerard.calculateAge());
/*----------------------------------------------------------------------------------------------------*/
// Person Constructor
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName
// }

// // Greeting
// Person.prototype.greeting = function() {
//   return `Hola ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('John', 'Doe');
// // console.log(person1.greeting());

// // Customer constructor
// function Customer(firstName, lastName, phone, membership) {
//   Person.call(this, firstName, lastName);

//   this.phone = phone;
//   this.membership = membership;
// }

// // Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// // Make customer.prototype return customer()
// Customer.prototype.constructor = Customer;

// // Create Customer
// const customer1 = new Customer('Diaz', 'Miguel', '000-345-1010', 'Premium');
// console.log(customer1);
// console.log(customer1.greeting());

// // Customer greeting
// Customer.prototype.greeting = function() {
//   return `Hola señor ${this.firstName} ${this.lastName}. Bienvenido a nuestro compañia!`;
// }

// console.log(customer1.greeting());

/*----------------------------------------------------------------------------------------------------*/

// Create Object
// const personPrototypes = {
//   greeting: function() {
//     return `Bonjour ${this.firstName} ${this.lastName}`
//   },
//   getsMarried: function(newLastName) {
//     this.lastName = newLastName;
//   }
// }

// const eric = Object.create(personPrototypes);

// eric.firstName = 'Eric';
// eric.lastName = 'Souza';
// eric.age = 25;

// eric.getsMarried('Kluivert');

// console.log(eric.greeting());

// const gloria = Object.create(personPrototypes, {
//   firstName: {value: 'Gloria'},
//   lastName: {value: 'Luiz'},
//   age: {value: 20}
// });

// console.log(gloria);
// console.log(gloria.greeting());
/*----------------------------------------------------------------------------------------------------*/

// ES6 Classes

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName, 
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return ` Hola ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1980);
  }
}
const kofi = new Person("Kofi", "Kodja", 11-05-1990);

console.log(kofi.calculateAge());
