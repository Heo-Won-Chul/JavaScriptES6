'use strict'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ start field

var globalField = 'global';
let areaField = 'area';
const finalField = 'final';

console.log(this.globalField); // global
console.log(this.areaField);   // undefined
console.log(this.finalField);  // undefined

function globalTest() {
    var name = 'null';

    if (true) {
        var name = 'wonchul';
        console.log(name);
    }

    console.log(name);
}

function areaTest() {
    let name = 'null';

    if (true) {
        let name = 'wonchul';
        console.log(name);
    }

    console.log(name);
}

globalTest();
areaTest();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end field

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ start arrow function

var pow = num => num * num;
var multiply = (x, y) => x * y;

console.log(pow(3));
console.log(multiply(2, 3));

var programmingLanguages = [
    "java",
    "javascript",
    "go"
];

var upperProgrammingLanguages = programmingLanguages.map(programming => programming.toLocaleUpperCase());

console.log(programmingLanguages);
console.log(upperProgrammingLanguages);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end arrow function

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ start blocks

{
    const a = 1;
    let   b = 2;

    console.log(a + ',' + b);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end blocks

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ start template

let name = 'Heo Won Chul';
let birthYear  = 1992;

var calcAge = year => new Date().getFullYear().valueOf() - birthYear

console.log(`My name is ${name}. I am ${calcAge(birthYear)} years old.`);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end template

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ start string

console.log(name.startsWith('Heo'));
console.log(name.includes(' '));
console.log(name.repeat(2));
console.log(`${name}, `.repeat(3));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end string

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ start class

class User {
    constructor(name = 'anonymous') {
        this._name = name;
    }

    open() {
        return 'Hello, ' + this._name;
    }
}

console.log(new User('wonchul').open());
console.log(new User().open());

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end class