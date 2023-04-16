//line below is used to print on console window
console.log('Namaste Dunia version4');
//Assigning value to a variable
let a = true;
console.log(a);

//cannot redeclare variable which was declared with const keyword,this statement will give error
//const num = 12;
//num = 13;
//Dynamic typing
///here 3 and 13 will both be printed as javascript is dynamically typed language.

let lastName = 3;
console.log(lastName);

lastName = 13;
console.log(lastName);

//using comparision operator
console.log(5 != 3);

//ternary operator
let age = 27;
let status = (age >= 18) ? 'Yes Vote' : 'No vote';
console.log(status);

//else-if statement

let marks = 12;

if (marks >= 90) {
    console.log('A');
}
else if (marks >= 80) {
    console.log('B');
}
else if (marks >= 70) {
    console.log('C');
}
else if (marks >= 60) {
    console.log('D');
}
else {
    console.log('E');
}

//switch statement

let num = 1;

switch (num) {
    case 1: console.log('A');
        break;
    case 2: console.log('B');
        break;
    case 3: console.log('C');
        break;
    case 4: console.log('D');
        break;
}

//Loops 
//for loop
for (let i = 1; i <= 5; i = i + 1) {
    console.log('Babbar' + i);
}

//while loop
let xer = 1;
while (xer <= 5) {
    console.log(xer);
    xer++;
}

//do while loop
let y = 1;
do {
    console.log(y);
    y++;
} while (y < 10);