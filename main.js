"use strict";
// 45 QUESTION 
//Question no 2
console.log("---Question No 2 (PERSONAL MESSAGE)---");
let myName = "anumta";
console.log(`Hi everyone ${myName} is my best friend`);
// Question no 3 (NAME CASE)
let fullName = "Samiya Abdullah";
console.log("lowercase:", fullName.toLowerCase()); // LOWER CASE
console.log("uppercase:", fullName.toUpperCase()); // UPPER CASE
console.log("titlecase:", fullName.replace(/\b\w/g, c => c.toUpperCase()));
// Question no 4 (FAMOUSE QUOTE)
let quote = "All that gliters is not gold.";
let author = "william shakespeare";
console.log(`${author} once said, "${quote}"`);
// Question no 5 (FAMOUSE QUOTE 2)
let famouse_person = "william shakespeare";
let message = `${famouse_person} once said,"${quote}"`;
console.log(message);
//Question no 6 (STRIPPING NAME)
let personeName = "\t\n   samiya abdullah   \n\t";
console.log("original:", personeName);
console.log("stripped:", personeName.trim());
// Question no 10 (ADDING COMMENT)
// name = samiya abdullah
// date = (8 july 2024)
//Question no 7 & 8 (NUMBER 8)
console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
// the answer of all these above operation is 8
// Question no 9 (FAVOURITE NUMBER)
let favouriteNum = 14;
let _message = `my favourite number is ${favouriteNum}`;
// reveling my favourite number in a message formate
console.log(_message);
// Question no 11 (NAMES)
let myFriends = ["anumta", "ammara", "warda"];
console.log(myFriends[0]);
console.log(myFriends[1]);
console.log(myFriends[2]);
// Question no 12 (GREETINGS)
let message2 = "you are invited in my biirthday party.";
console.log(myFriends[0] + " " + message2);
console.log(myFriends[1] + " " + message2);
console.log(myFriends[2] + " " + message2);
// Question no 13 (YOUR OWN ARRAY)
let vehicles = ["honda city", "alto", "civic"];
for (let vehcile of vehicles) {
    console.log(`i would like to own a ${vehcile}`);
}
// Question no 14 (GUEST LIST)
let family = ["ruba", "ami", "papa"];
for (let guest of family) {
    console.log(`Dear ${guest}, I would be honored if you could join me for dinner.`);
}
// Question no 15 (CHANGING GUEST LIST)
console.log(family[0] + " " + "can not attend the dinner.");
family[0] = "emaad";
for (let guests of family) {
    console.log(`Dear ${guests}, I would be honored if you could join me for dinner.`);
}
// Question no 16 (MORE GUEST)
console.log(`${family}, I found a bigger dinner table.`);
family.unshift("ruba");
family.splice(3, 0, "anabiya");
family.push("rehan");
for (let guests2 of family) {
    console.log(`Dear ${guests2}, I would be honored if you could join me for dinner.`);
}
// Question no 17 (SHRINKING GUEST LIST)
console.log(`${family},sorry everyone because I can invite only 2 person for the dinner.`);
family.pop();
family.shift();
family.shift();
family.splice(1, 1);
console.log(family[0] + " " + "you are stil invited in my dinner.");
console.log(family[1] + " " + "you are stil invited in my dinner.");
family.splice(0, 2);
console.log(family);
// Question no 18 (SEEING THE WORLD)
let favPlaces = ["pakistan", "turkey", "dubai", "singapor", "switzerland"];
console.log("original order:", favPlaces);
console.log("Alphabetical order:", [...favPlaces].sort());
console.log("Original order after sorting:", favPlaces);
console.log("Reverse alphabetical order:", [...favPlaces].sort().reverse());
console.log("Original order after reverse sorting:", favPlaces);
favPlaces.reverse();
console.log("Reverse order:", favPlaces);
favPlaces.reverse();
console.log("Reverse order:", favPlaces);
favPlaces.sort();
console.log("sorted in alphabetical order:", favPlaces);
favPlaces.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", favPlaces);
// Question no 19 (DINNER GUESTS)
console.log(`I am inviting ${family.length} people to dinner.`);
// Question no 20 (LIST)
let cities = ["karachi", "lahore", "peshawar", "sawat"];
console.log("list of cities:", cities);
let student1 = {
    name: "samiya",
    age: 21,
    rollNo: 1234,
};
console.log(student1);
// Question no 22 (INTENTIONAL ERROR)
let fruits = ["apple", "mango", "orange"];
console.log(fruits[6]); // this code will output is undefined and will also throw an error
// to correct the error, I can chaange the index to a valid value, like this
console.log(fruits[0]);
// Question no 23 (CONDITIONAL TESTS)
let car = "subaru";
console.log("is car == 'subaru'? predict true");
console.log(car == 'subaru');
console.log("is car == 'honda city'? predict false");
console.log(car == 'honda city');
let age = 25;
console.log("is age >= 18? predict true");
console.log(age >= 18);
let age2 = 15;
console.log("is age >= 18? predict false");
console.log(age2 >= 18);
let name1 = "johan";
console.log("is name1 == 'johan'? predict true");
console.log(name1 == 'johan');
console.log("is name1 == 'jane'? predict false ");
console.log(name1 == 'jane');
let isAdmin = true;
console.log("is isAdmin == true? predict true");
console.log(isAdmin == true);
let isAdmin1 = false;
console.log("is isAdmin1 != false? predict false");
console.log(isAdmin1 != false);
let num = 5;
console.log("is num > 3? predict true ");
console.log(num > 3);
console.log("is num > 10? predict false ");
console.log(num > 10);
// Question no 24 (MORE CONDITIONAL TESTS)
// string equality ans inequaility test
let name2 = "samiya";
console.log("is name2 == 'samiya'? predict true");
console.log(name2 == 'samiya');
console.log("is name2 != 'samiya'? predict true");
console.log(name2 != 'samiya');
// lowercase function tests
let myName1 = "SAMIYA";
console.log("is myName.toLowerCsase == 'samiya'? I predict true");
console.log(myName1.toLowerCase() == 'samiya');
console.log("is myName.toLowerCsase == 'saima'? I predict false");
console.log(myName1.toLowerCase() == 'saima');
// numerical test
let favNum = 5;
console.log("is favNum == 5? I predict true");
console.log(favNum == 5);
console.log("is favNum > 10? I predict false");
console.log(favNum > 10);
console.log("is favNum >= 5? I predict true");
console.log(favNum >= 5);
console.log("is favNum <= 3? I predict false");
console.log(favNum <= 3);
// And and or operator test
let _num1 = 5;
let _num2 = 10;
console.log("is _num1 == 5 && _num2 == 10? I predict true");
console.log(_num1 == 5 && _num2 == 10);
console.log("is _num1 == 5 || _num2 == 5? I predict true");
console.log(_num1 == 5 || _num2 == 5);
console.log("is _num1 == 10 && _num2 == 5? I predict false");
console.log(_num1 == 10 && _num2 == 5);
// array test
let color = ["red", "blue", "green"];
console.log("is 'red' in color? I predict true");
console.log(color.includes('red'));
console.log("is 'yellow' in color? I predict false");
console.log(color.includes('yellow'));
// Question no 25 (ALLIEN COLOR #1)
let allienColor = "green";
if (allienColor) {
    console.log("player earned 5 points");
}
;
let allien_color = "red";
if (allien_color == "green") {
    console.log("player earned 5 point");
}
//Question no 26 (ALIEN COLOR # 2)
// version 1
if (allienColor == "green") {
    console.log("player earned 5 points");
}
else {
    console.log("player earned 10 points");
}
;
// version 2
if (allienColor == "red") {
    console.log("player earned 5 points");
}
else {
    console.log("player earned 10 points");
}
;
// Question no 27 (ALLIEN COLOR #3)
// version 1
let alien_color = "green";
if (alien_color == "green") {
    console.log("player earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("player earned 10");
}
else if (alien_color == "red") {
    console.log("player earned 15 points");
}
;
// version 2
alien_color = "yellow";
if (alien_color == "green") {
    console.log("player earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("player earned 10");
}
else if (alien_color == "red") {
    console.log("player earned 15 points");
}
;
// version 3
alien_color = "red";
if (alien_color == "green") {
    console.log("player earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("player earned 10");
}
else if (alien_color == "red") {
    console.log("player earned 15 points");
}
;
// Question no 28 (STAGE OF LIFE)
// version 1
let person_age = 1;
if (person_age < 2) {
    console.log("person is a baby.");
}
else if (person_age >= 2 && person_age < 4) {
    console.log("person is a toddler.");
}
else if (person_age >= 4 && person_age < 13) {
    console.log("person is a kid.");
}
else if (person_age >= 13 && person_age < 20) {
    console.log("person is a teenager.");
}
else if (person_age >= 20 && person_age < 65) {
    console.log("person is an adult.");
}
else if (person_age >= 65) {
    console.log("person is a elder.");
}
;
//version 2
person_age = 9;
if (person_age < 2) {
    console.log("person is a baby.");
}
else if (person_age >= 2 && person_age < 4) {
    console.log("person is a toddler.");
}
else if (person_age >= 4 && person_age < 13) {
    console.log("person is a kid.");
}
else if (person_age >= 13 && person_age < 20) {
    console.log("person is a teenager.");
}
else if (person_age >= 20 && person_age < 65) {
    console.log("person is an adult.");
}
else if (person_age >= 65) {
    console.log("person is a elder.");
}
;
// version 3
person_age = 18;
if (person_age < 2) {
    console.log("person is a baby.");
}
else if (person_age >= 2 && person_age < 4) {
    console.log("person is a toddler.");
}
else if (person_age >= 4 && person_age < 13) {
    console.log("person is a kid.");
}
else if (person_age >= 13 && person_age < 20) {
    console.log("person is a teenager.");
}
else if (person_age >= 20 && person_age < 65) {
    console.log("person is an adult.");
}
else if (person_age >= 65) {
    console.log("person is a elder.");
}
;
// version 4
person_age = 35;
if (person_age < 2) {
    console.log("person is a baby.");
}
else if (person_age >= 2 && person_age < 4) {
    console.log("person is a toddler.");
}
else if (person_age >= 4 && person_age < 13) {
    console.log("person is a kid.");
}
else if (person_age >= 13 && person_age < 20) {
    console.log("person is a teenager.");
}
else if (person_age >= 20 && person_age < 65) {
    console.log("person is an adult.");
}
else if (person_age >= 65) {
    console.log("person is a elder.");
}
;
// version 5
person_age = 67;
if (person_age < 2) {
    console.log("person is a baby.");
}
else if (person_age >= 2 && person_age < 4) {
    console.log("person is a toddler.");
}
else if (person_age >= 4 && person_age < 13) {
    console.log("person is a kid.");
}
else if (person_age >= 13 && person_age < 20) {
    console.log("person is a teenager.");
}
else if (person_age >= 20 && person_age < 65) {
    console.log("person is an adult.");
}
else if (person_age >= 65) {
    console.log("person is a elder.");
}
;
// Question no 29 (FAVOURITE FRUIT)
let favourite_fruit = ["apple", "mango", "banana"];
if (favourite_fruit.includes("apple")) {
    console.log("I like to eat apple");
}
;
if (favourite_fruit.includes("mango")) {
    console.log("I like to eat mango");
}
;
if (favourite_fruit.includes("banana")) {
    console.log("I like to eat banana");
}
;
if (favourite_fruit.includes("grapes")) {
    console.log("I like to eat grapes");
}
;
if (favourite_fruit.includes("orange")) {
    console.log("I like to eat orange");
}
;
// Question no 30 (HELLOW ADMIN)
let userNmaes = ["admin", "abdullah", "maryam", "neha", "hamza"];
for (let i = 0; i < userNmaes.length; i++) {
    let userName = userNmaes[i];
    if (userName === "admin") {
        console.log("Hellow admin, would you like to see a status report.");
    }
    else {
        console.log(`Hellow ${userName}, thank you for login again. `);
    }
    ;
}
;
// Question no 31 (NO USER)
let userNames = ["admin", "user1", "user2"];
userNames.pop();
userNames.shift();
userNames.pop();
if (userNames.length === 0) {
    console.log("we need to find saome users.");
}
;
// Question no 32 (CHECKING USER)
let current_user = ["asim", "ali.muha", "samiya.azmat", "ruba@li"];
let new_user = ["ASIM", "samiya.azmat", "muha.abdullah", "ali.muha"];
for (let i = 0; i < new_user.length; i++) {
    let newUser = new_user[i];
    if (current_user.includes(newUser.toLowerCase())) {
        console.log(`sorry,${newUser} is already taken. please choose a new user name.`);
    }
    else {
        console.log(`great, ${newUser} is available.`);
    }
    ;
}
;
// Question no 33 (ORDINAL NUMBER)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
    let number_1 = numbers[i];
    let ordinalEnding;
    if (number_1 === 1) {
        ordinalEnding = "st";
    }
    else if (number_1 === 2) {
        ordinalEnding = "nd";
    }
    else if (number_1 === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${number_1}${ordinalEnding}`);
}
;
// Question no 34 (pizzas)
let fav_pizza = ["pepperoni", "BBQ", "malai boti"];
for (let i = 0; i < fav_pizza.length; i++) {
    let pizza = fav_pizza[i];
    console.log(`I like ${pizza} pizza.`);
}
console.log(" i really like pizza!");
// Question no 35 (ANIMALS)
let animals = ["cat", "dog", "parrot"];
for (let i = 0; i < animals.length; i++) {
    let pet = animals[i];
    console.log(`I like ${pet}.`);
}
console.log("AL OF THESE ANIMALS ARE GOOD PETS");
// Question no 36 (T-SHIRTS)
function make_shirts(size, message) {
    console.log(`the shirt size is ${size} and says "${message}".`);
}
make_shirts("large", "i love javascript");
// Question no 37 (LARGE SHIRTS)
function makeShirts(size = "large", message = "I love typescript") {
    console.log(`the shirt size is ${size} and says "${message}".`);
}
makeShirts();
makeShirts("medium");
makeShirts("small", "I love javascript");
// Question no 38 (CITIES)
function descibe_city(city, country = "pakistan") {
    console.log(`${city} is in ${country}.`);
}
descibe_city("karachi");
descibe_city("lahore");
descibe_city("new york", "USA");
// Question no 39 (CITIES NAMES)
function city_country(city, country) {
    return `${city},${country}`;
}
let c1 = city_country("lahore", "pakistan");
let c2 = city_country("tokyo", "japan");
let c3 = city_country("new york", "USA");
console.log(c1);
console.log(c2);
console.log(c3);
// Question no 40 (ALBUM)
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    else {
        return album;
    }
}
console.log(make_album("adele", "21"));
console.log(make_album("beyonce", "lemonade"));
console.log(make_album("kendrick lamar", "good kid, M.A.A.D city", 15));
// Question no 41 (MAGICIANS)
let magicians = ["ali", "khan", "shah"];
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
;
show_magicians(magicians);
// Question no 42 (GREAT MAGICIANS)
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the great ${magicians[i]}`;
    }
}
;
let magicians2 = ["ali", "khan", "shah"];
make_great(magicians2);
show_magicians(magicians2);
// Question no 43 (UNCHANGED MAGICIANS)
function make_great2(magicians) {
    let greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " the great");
    }
    return greatMagicians;
}
let magicians3 = ["ali", "khan", "shah"];
let greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
// Question no 44 (SANDWICHES)
function make_sandwich(...items) {
    console.log("you ordered a sandwich with.");
    for (let i = 0; i < items.length; i++) {
        console.log(`-${items[i]}`);
    }
}
make_sandwich("turkey", "avocado", "bacon", "lettuce");
make_sandwich("ham", "cheese", "tomato");
make_sandwich("grilled cheese");
function creat_car(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
let myCar = creat_car("toyota", "corolla", { color: "silver", year: "2019" });
console.log(myCar);
