console.log("Hello Trifid");

// Talk about some types
const numberOne = 1
const stringOne = '1'

console.log('Using a ==');
if (numberOne == stringOne){
  console.log('Look, they even match even though one is a string');
} else {
  // the '\' is called an '"escape character" to keep the ' in the word "don't" from ending our string
  console.log('Look, they don\'t match, cuz one is a string');
}
//using a ==, the first statement is true and second is false

console.log('Using a ===');
if (numberOne === stringOne){
  console.log('Look, they even match even though one is a string');
} else {
  // the '\' is called an '"escape character" to keep the ' in the word "don't" from ending our string
  console.log('Look, they don\'t match, cuz one is a string');
}
//using a === makes the second statement true since they are exact match

//types
let string = 'hello!';
let numbers = 123;
let booleans = true; //or false
let object = { name: 'trifid'}
let array = [1,2, 'hello', {saying: 'woot'}]  //different types
let specialType1 = null; //null is used to say something has an EMPTY value
let specialType2 = undefined; //something has NO values
// undefined is different than 'not defined' which you might see in an error messege
// ex) let Mary <<undefined variable, will log out undefined in browser tools
// ex) function hello(){
       // console.log(hello);
       // this is a function that doesn't explicity return a value
let specialType3 = NaN; // stands for Not a Number

let myNumber = 987;
// many ways to accomplish the same outcome with various code structuring
// if ( myNumber <= 42) {
if ( 42 >= myNumber){
  console.log('myNumber is smaller or matches');
} else {
  console.log('myNumber is bigger');
}

if (myNumber < 42 || myNumber == 42 ) {
  console.log('myNumber us smaller or matches');
} else {
  console.log('myNumberis bigger');
}

if (myNumber !== 42) {
  console.log('myNumber is not the answer to life');
}

//Part 2 - Loops
console.log('*********** loops! *********');

// for i loop to console.log each name in order
let names = ['Andy', 'Dev', 'Mary', 'Luke',];
for (let i=0; i < names.length; i++){
  console.log(names[i]);
}
// can also be done with a 'for of' loop
console.log('For of Loop');
for (let name of names) {
  console.log(name);
}
// by using 'let' inside the () inside the 'for' loop it makes only pertainable in this code block and won't affect any other code ran
// make sure anything let= is the same in the for loop and what's inside of console.log();
  // ex) 'name' matches in the loop and console.log();

//while there are names in the array,
//console.log the name and remove it from the array...
//don't use a for loop for this...
console.log('remove name from array');
while ( names.length > 0 ) {
  //get the name
  //remove name from array
  let theName = names.shift();
  console.log(theName);
}

//Functions
//inputs to a function go in parenthesis
//this takes in a name, inputs are also called parameters or arguements
function greet( name ){
  return `Hello, ${name}!`; // this is a template literal string
}

greet('Trifid')
console.log(greet('Andy'));

//Review Objects

//Cohort object for Trifid
//with properties for: Lead Instructors, director
//room number, and array of students
let Trifid = {
    names: ['Courtney', 'Amber', 'Luke', 'Roey', 'Jamie', 'Ben', 'Ken', 'Harrison', 'Elmi', 'Mohamed', 'Corey', 'Philip', 'Paige', 'Awren', 'Andy', 'Chad', 'David'],
  leadInstructors : 'Mary',
  roomNumber: Two,
  director: 'Dev',
}

// console.log out the Trifid cohort object
console.log('Cohort Trifid: ', Trifid );

//Make a function to create many hats
function createHat(type, color, size) {
    let newHat = {
        type: type,
        color: color,
        size: size
    }
    return newHat;
}

let blueHat = createHat('beanie', 'blue', 'medium');
console.log('blue hat:', blueHat)
//alternatively the above function can be written as follows:
let blueHat = { type, color, size};

//Object constructor function
function Hat(type, color, size) {
    //'this' refers to the object we are making
    this.type = type;
    this.color = color;
    this.size = size;
}

//make a new Hat object - AKA making an instance of Hat
let greyHat = new Hat('beanie', 'grey', 'Med')
console.log('grey hat:', greyHat);
