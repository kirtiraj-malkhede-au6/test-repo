"use strict";

/*

function logger() {
    console.log('My name is Kirtiraj');
}
// calling, running, invoking function
logger();
logger();
logger();

function fruitProcessor(apple, oranges) {
    const juice = `juice with ${apple} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangejuice = fruitProcessor(2, 4);
console.log(appleOrangejuice);

*/
/*

// Function declaration

function calcAge1(birthYear) {
    return 2021 - birthYear;
}
const age1 = calcAge1(1997);

// Function Expression

const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}
const age2 = calcAge2(1994);

console.log(age1, age2);

*/
/*

// Arrow function

const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 60 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} yeas`;
}
console.log(yearUntilRetirement(1997, 'Kirtiraj'));
console.log(yearUntilRetirement(1994, 'Diksha'));

*/
/*

const cutPieces = function (fruit) {
    return fruit * 4;
};

const fruitProcessor = function (apple, oranges) {

    const applePieces = cutPieces(apple);
    const orangePieces = cutPieces(oranges);

    const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
};

console.log(fruitProcessor(2, 3));

*/
/*

// Coding challenge 1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
console.log(calcAverage(1, 2, 3));

// Test data 1

let scoreDolphin = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphin, scoreKoalas);

const checkWinner = function (avgDolphin, avgKoalas) {
    if (avgDolphin >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphin} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphin * 2) {
        onsole.log(`Koalas win (${avgKoalas} vs. ${avgDolphin})`);
    } else {
        console.log('No team wins..');
    }

}
checkWinner(scoreDolphin, scoreKoalas);

checkWinner(300, 100);

// Test data 2
scoreDolphin = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphin, scoreKoalas);
checkWinner(scoreDolphin, scoreKoalas);

*/

/*
// Array

const friend1 = "Kirtiraj";
const friend2 = "Diksha";
const friend3 = "Mayur";

const friends = ["Kirtiraj", "Diksha", "Mayur"];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends[1]);

const years1 = new Array(1992, 1994, 1997, 1998);

console.log(years1[1]);
console.log(years1[0]);
console.log(years1[3]);

console.log(years1.length);
console.log(years1[years1.length - 1]);

friends[2] = "Papa";
console.log(friends);
// friends = ['anita', 'premanand'];  ---we cant replace hole array

const firstName = "Kirtiraj";
const myInfo = [firstName, "Malkhede", 2021 - 1997, "student", friends];
console.log(myInfo);

console.log(myInfo.length);

// Exercise

const calcAge = function (birthYear) {
  return 2021 - birthYear;
};
const years = [1992, 1994, 1997, 1998];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3, age4);

const age = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[years.length - 1]),
];
console.log(age);

*/
