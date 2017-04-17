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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ start for

const arr = ['a', 'b', 'c'];

arr.forEach(value => {
    // can not use the break statement.
    console.log(value);
});

for(let i in arr) {
    console.log(arr[i]);

    if(i == 1) {
        break;
    }
}

for(let i of arr) {
    break;
    console.log(i);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end for

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ start arrow function

const pow = num => num * num;
const multiply = (x, y) => x * y;

console.log(pow(3));
console.log(multiply(2, 3));

const programmingLanguages = [
    "java",
    "javascript",
    "go"
];

const upperProgrammingLanguages = programmingLanguages.map(programming => programming.toLocaleUpperCase());

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

const calcAge = year => new Date().getFullYear().valueOf() - birthYear;

console.log(`My name is ${name}. I am ${calcAge(birthYear)} years old.`);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end template

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ start string

console.log(name.startsWith('Heo'));
console.log(name.includes(' '));
console.log(name.repeat(2));
console.log(`${name}, `.repeat(3));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end string

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ start rest parameter

const addNumber = (... numbers) => numbers.reduce((sum, number) => sum + number, 0);

console.log(addNumber(1,2,3,4));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end rest parameter

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ start spread operator

const defaultColors = ['red', 'green'];
const userFavoriteColors =['yellow', 'orange'];

console.log([ ...defaultColors, ...userFavoriteColors ]);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end spread operator

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ start class

class User {
    constructor(name = 'anonymous') {
        this._name = name;
    }

    open() {
        return 'Hello, ' + this._name;
    }

    static service() {
        console.log(`User name is ${name}.`)
    }
}

console.log(new User('wonchul').open());
console.log(new User().open());
User.service();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end class

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ start promise

const sleep = msec => new Promise((resolve, reject) => setTimeout(resolve, msec));

sleep(1000).then( () => console.log('wake!'));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end promise

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ start promise ajax

const getAjaxPromise = url => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "json";
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                resolve(xhr.response);
            } else {
                reject(xhr.status);
            }
        }
    };
    xhr.send();
});

getAjaxPromise("https://api.github.com/users/Heo-Won-Chul/repos")
.then(response => {
    console.log(response);
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end promise ajax

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ start promise race

const delay100 = new Promise(resolve => {
    const delay = 100;

    setTimeout(() => {
        console.log(delay);
        resolve(delay);
    }, delay);
});

const delay200 = new Promise(resolve => {
    const delay = 200;

    setTimeout(() => {
        console.log(delay);
        resolve(delay);
    }, delay);
});


const delay300 = new Promise(resolve => {
    const delay = 300;

    setTimeout(() => {
        console.log(delay);
        resolve(delay);
    }, delay);
});

Promise.race([
    delay200,
    delay300,
    delay100
]).then(result => {
    console.log(`result is ${result}`);
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end promise race

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ start import & export

// import & export source

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end import & export