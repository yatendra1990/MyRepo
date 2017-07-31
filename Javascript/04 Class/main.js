C = console.info.bind(console);

// ========================================
// Javascript Object
// ========================================

function hello(){
	C('hello world!');
}

var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue",
	sayHello: function(){
		return 'hello';
	},
	fullName: function(){
		return this.firstName + ' ' + this.lastName;
	}
};

C(person.firstName);

document.write(person.firstName);
document.write('<br/>');
document.write(person.lastName);
document.write('<br/>');
document.write(person.age);
document.write('<br/>');
document.write(person.eyeColor);
document.write('<br/>');

document.write('Hello World!');

document.write(person.sayHello());
document.write('<br/>');

document.write(person.fullName());






// ========================================
// Javascript Class
// ========================================

var Person = function (firstN) {
	this.firstName = firstN;
};

var person1 = new Person('Alice');
var person2 = new Person('Bob');


C(person1.firstName);
C(person2.firstName);



// ========================================
// Javascript Method
// ========================================

var Person = function (firstName) {
	this.first = firstName;
  
	this.say = function(){
		return 'hello from ' + this.first;
	}
};
/* this.first is a public varaiable */
var person1 = new Person('Alice');
var person2 = new Person('Bob');


C(person1.first);
C(person2.first);

C(person1.say());
C(person2.say());



// ========================================
// Javascript Prototypical Inheritance
// ========================================

var Person = function (firstName) {
	this.firstName = firstName;
};

Person.prototype.sayHello = function() {
	C("Hello, I'm " + this.firstName);
};
/* Person.sayHello is a public method */
var person1 = new Person("Alice");
var person2 = new Person("Bob");

// call the Person sayHello method.
person1.sayHello();
person2.sayHello();



// ========================================
// Javascript Prototypical Inheritance
// ========================================

var Person = function (firstName) {
	this.firstName = firstName;
};

var person1 = new Person("Alice");
var person2 = new Person("Bob");

Person.prototype.sayHello = function() {
	C("Hello, I'm " + this.firstName);
};

// call the Person sayHello method.
person1.sayHello();
person2.sayHello();


