// let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

// 40 + 10 + 30 - 20;
// console.log(40 + 10 + 30 - 20);

/*
let myFirstjob = 'Production Engineer';
let myCurrentjob = 'Web developer';
let myFirstname = 'Kirtiraj';
let myCurrentname = 'Swayam';

console.log(myCurrentname);
console.log(myFirstjob);
*/

/*let javascriptIsFun = true;
let firstName = 'Kirtiraj';
let year = 1997;

javascriptIsFun = 'FUN';

console.log(javascriptIsFun);
console.log(firstName);
console.log(typeof javascriptIsFun);
console.log(typeof firstName);
console.log(year);
console.log(typeof year);
*/

/*  Math Operator
const now = 2021;
const ageKirtiraj = now - 1997;
const ageDiksha = now - 1995;
console.log(ageKirtiraj, ageDiksha);
console.log(ageKirtiraj * 2, ageDiksha * 1.5, 2 ** 3);

const firstName = 'Kirtiraj';
const lastName = 'Malkhede';
console.log(firstName + ' ' + lastName);
*/
/* Assignment Operator
let x = 10 + 5; // x = 15
x += 20;       // x = x + 20 = 35
x *= 4;       // x = x * 4 = 140
x++;         // x = x + 1
x /= 2;     // x = x / 2
x--;       // x = x - 1
x--;
console.log(x);

// Comparison Operator

console.log(ageKirtiraj < ageDiksha); // <, >,<= ,>=
console.log(ageDiksha > 18);
console.log(ageKirtiraj < 18);

console.log(now - 1997 < now - 1995);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const avgAge = (ageKirtiraj + ageDiksha) / 2;
console.log(ageKirtiraj, ageDiksha, avgAge);

*/

/*
const firstName = 'Kirtiraj';
const job = 'web Developer';
const birthYear = 1997;
const year = 2021;

const kirtiraj = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(kirtiraj);

const kirtirajNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}! `;
console.log(kirtirajNew); //ES06 Features

console.log(`We can write any string`);

console.log(`we canwrite
multiline
string`);

*/

//controlled structure
/*
const ageDiksha = 18;

if (ageDiksha >= 18) {
    console.log(`Diksha can start driving license.`);
} else {
    const yearLeft = 18 - ageDiksha;
    console.log(`Diksha is too young, wait another ${yearLeft} years.`);
}

const birthYear = 1997;

let century; // declare variable outside the control structure

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/
/*
//CODING CHALLENGE 1 AND 2

const markHeight = 'h1';
const markWeight = 'm1';
const johnHeight = 'h2';
const johnWeight = 'm2';

// const h1 = 1.69;
// const h2 = 1.95;
// const m1 = 78;
// const m2 = 92;

const h1 = 1.88;
const h2 = 1.76;
const m1 = 95;
const m2 = 85;

const markBMI = m1 / (h1 ** 2);
const johnBMI = m2 / (h2 ** 2);
const markhigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markhigherBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's (${markBMI}) BMI is higher than John's (${johnBMI})!`);
} else {
    console.log(`Mark's (${markBMI}) BMI is lower than John's (${johnBMI})!`);
}
*/
/*
// type conversion

const inputYear = '1997';
console.log(Number(inputYear), 1997);
console.log(Number(inputYear) + 18);

console.log(Number('Kirtiraj'));
console.log(typeof NaN);

console.log(String(24), 24);

// type coercion
console.log('I am' + 24 + ' Year old');
console.log('23' - '10' - 3);
console.log('23' * 2);
console.log('23' / 2);

let n = '1' + 1;
n = n - 1;
console.log(n);
*/
/*
// falsy values are - 0, Null, undefined, Nan, ''

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean('Kirtiraj'));
console.log(Boolean({}));
console.log(Boolean(undefined));

let money = 0;

if (money) {
    console.log("Don't spent it all ");
} else {
    console.log('You should get a job!');
}
*/
/*
const age = 18;
if (age === 18) console.log('you are become an adult (strick)');

if (age == 18) console.log('you are become an adult (loose)');

const favourite = prompt("What's your favourite number ?");
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool ! 23 is an amazing number');
} else if (favourite === 7) {
    console.log('Cool ! 7 is an amazing number');
} else if (favourite === 9) {
    console.log('Cool ! 9 is an amazing number');
} else {
    console.log('Number is not 23 or 7 or 9');
}
if (favourite !== 23) {
    console.log('Why not 23 ?');
}

*/
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Diksha is able to drive!');
// } else {
//     console.log('Someone else should drive..');
// }

const isTired = false;

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Diksha is able to drive!');
} else {
    console.log('Someone else should drive..');
}
*/
/*
// Coding callenge 3

const s1Dolphin = 97;
const s2Dolphin = 112;
const s3Dolphin = 101;
const avgDolphin = (s1Dolphin + s2Dolphin + s3Dolphin) / 3;
console.log(avgDolphin);

const s1Koalas = 109;
const s2Koalas = 95;
const s3Koalas = 106;
const avgKoalas = (s1Koalas + s2Koalas + s3Koalas) / 3;
console.log(avgKoalas);

if (avgDolphin > avgKoalas) {
    console.log('Team Dolphins win the trophy');
} else if (avgDolphin === avgKoalas) {
    console.log('No team wins the trophy');
} else {
    console.log('Team Koalas win the trophy ');
}
*/

/*
// the switch statement


const day = 'friday';
switch (day) {
    case 'monday': //day==='monday'
        console.log('Do the html practice');
        console.log('along with CSS')
        break;
    case 'tuesday':
    case 'wedesday':
        console.log('practice javascript');
        break;
    case 'thursday':
        console.log('learn React framework');
        break;
    case 'friday':
        console.log('learn MongoDB');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy weekend!');
        break;
    default:
        console.log('invalid day ');
}

*/

/*
// the conditional (ternary) operator

const age = 19;

// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

*/

/*

// coding challenge 4

const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

*/

