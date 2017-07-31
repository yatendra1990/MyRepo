if (console)C = console.info.bind(console);else C = function(){};

// ========================================
// Named Function
// ========================================

function afunc(a, b) {
	return a * b;
}
C(afunc(10, 2));

// ========================================
// Anonymous Function
// ========================================

var bfunc = function(a, b) {
	return a * b;
}

C(bfunc(20, 3));

// ========================================
// Function as Method
// ========================================

var person = {
	firstName: 'John',
	lastName: 'Doe',
	fullName: function(){
		return this.firstName + ' ' + this.lastName;
	}
}

C(person.firstName);
C(person.lastName);
C(person.fullName());

// ========================================
// Other ways of calling functions
// ========================================
var obj = {
	hello: 'world'
}

function add(a, b){
	C(this.hello);
	return a + b;
}

C(add(1, 2));

// C(add.call(window, 4, 3));
C(add.call(obj, 4, 3));


// C(add.apply(window, [2, 4]));
C(add.apply(obj, [10, 2]));


// ========================================
// Running a function in another scope
// ========================================
function fullName(){
	return this.firstName + ' ' + this.lastName;
}

var person = {
	firstName: 'John',
	lastName: 'Doe'
}

fullName.call(person);


// ========================================
// Running a function of one object
// in another object
// ========================================
var Person = function (firstN) {
	this.firstName = firstN;
	this.showName = function(){
		return this.firstName;
	}
};

var person1 = new Person('Alice');
var person2 = new Person('Bob');


// C(person1.firstName);
// C(person2.firstName);

// C(person1.showName());
// C(person2.showName());

C(person1.showName.call(person2));


// ========================================
// Binding a function in another scope
// ========================================
var person = {
	firstName: 'John',
	lastName: 'Doe'
}

function fullName(){
	return this.firstName + ' ' + this.lastName;
}

var boundFn = fullName.bind(person);

boundFn();










