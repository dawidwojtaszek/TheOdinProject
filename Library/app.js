// Konsturktor

function Person(name, sureName) {
  this.name = name;
  this.sureName = sureName;
}

Person.prototype.sayHello = function () {
  return `hello ${this.name} ${this.sureName}`;
};

const john = new Person("John", "Doe");

function Costumer(name, sureName, membership) {
  Person.call(this, name, sureName);
  this.membership = membership;
}

Costumer.prototype = Object.create(Person.prototype);

const consumer1 = new Costumer("joga", "bonito", "standard");

console.log(consumer1.sayHello());
