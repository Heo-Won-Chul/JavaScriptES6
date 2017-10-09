// [ case 1 ]
function PersonFromEs5 (firstName, lastName) {

	this.firstName = firstName;
	this.lastName = lastName;

	return {
		getFullName : function () {
			return firstName + ' ' + lastName;           // wonchul heo
			// return this.firstName + ' ' + this.lastName; // undefined undefined
		}
	};
}

function PersonFromEs6 (firstName, lastName) {

	this.firstName = firstName;
	this.lastName = lastName;

	return {
		getFullName : () => {
			return firstName + ' ' + lastName;              // wonchul heo
			// return this.firstName + ' ' + this.lastName; // wonchul heo
		}
	};
}

console.log('ES 5 : %s\nES 6 : %s',
	PersonFromEs5('wonchul', 'heo').getFullName(),
	PersonFromEs6('wonchul', 'heo').getFullName()
);

// [ case 2 ]
function Person (firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

class PersonClass {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	setFullName(fullName) {
		let array = fullName.split(' ');
		this.firstName = array[0];
		this.lastName = array[1];
	}
}

const person = new Person('wonchul', 'heo');

Person.prototype.getFullNameFromEs5 = function() {
	return this.firstName + ' ' + this.lastName;            // wonchul heo
};

Person.prototype.getFullNameFromEs6 = () => {
	return this.firstName + ' ' + this.lastName;            // undefined undefined
};

console.log('ES 5 : %s\nES 6 : %s',
	person.getFullNameFromEs5(),
	person.getFullNameFromEs6()
);

const personClass = new PersonClass('wonchul', 'heo');
console.log(personClass.getFullName());

personClass.setFullName('naeun jeon');
console.log(personClass.getFullName());