// 6.	Stripping Names: Store a person’s name, 
// and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. 
// Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.

let person_name: string = "\t    Muhammad ASSADIFTEKHAR   \n";
console.log(`${person_name}`);
person_name = person_name.trim();
console.log(`${person_name}`);










// 7.	Number Eight: Write addition, subtraction, multiplication, and division operations 
// that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
/*
let addition: number = 2 + 8;
let subtraction: number = 2 - 8;
let multiplication: number = 2 * 8;
let division: number = 2 / 8;

console.log(`Addition =\t${addition}`);
console.log(`Subtraction =\t${subtraction}`);
console.log(`Multiplication = \t${multiplication}`);
console.log(`Division = \t${division}`);













// 8.	You should create four lines that look like this:
// ________________________________________
// console.log(5 + 3)
// ________________________________________
// Your output should simply be four lines with the number 8 appearing once on each line.
/*
console.log(`________________________________________`);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(`________________________________________`);









// 9.	Favorite Number: Store your favorite number in a variable. 
// Then, using that variable, create a message that reveals your favorite number.
// Print that message.
/*
let favorite_number: number = 99;
console.log(`My favorite number is ${favorite_number}`);











/*  

let fav_number: number = 99;    // My favorite number
console.log(`My favorite number is ${fav_number}`);    // Printing favorite number


//  Muhammad Najam Ul Islam  13/02/2023
// Defining variable and its datatype
let add: number = fav_number + 8;
let sub: number = fav_number - 8;   // subtract 8 from fav_number
let mul: number = fav_number * 8;
let div: number = fav_number / 8;

console.log(`Addition =\t${add}`);
console.log(`Subtraction =\t${sub}`);
console.log(`Multiplication = \t${mul}`);
console.log(`Division = \t${div}`);















// 45.	Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value 
// pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.
/*
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
  }
  
  function createCar(manufacturer: string, model: string, ...args: any[]): Car {
    const car: Car = { manufacturer, model };
    args.forEach((arg, index) => {
      if (index % 2 === 0 && typeof arg === "string") {
        const key = arg;
        const value = args[index + 1];
        car[key] = value;
      }
    });
    return car;
  }
  
  const myCar = createCar("Toyota", "Corolla", "color", "red", "year", 2022);
  console.log(myCar);











// 44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.
/*
function sandwiches(...items:string[]): void{
    console.log(`You ordered ${items.length} items: ${items.join(', ')}`)
}
// const items: string[] = ['turkey', 'bacon', 'avocado', 'mayo', 'mustard'];
sandwiches('turkey', 'bacon', 'avocado', 'mayo', 'mustard');
sandwiches('turkey', 'bacon', 'avocado');
sandwiches('turkey', 'bacon', 'avocado', 'mayo'); 













// 42.	Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians 
// by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
/*
const magician_name:string[] = ['Paul Daniels','David Blaine','Derren Brown','Harry Houdini','Penn & Teller'];
function show_magicians(magician:string[]): void{
    for(let i = 0; i < magician.length; i++){
        // joining the string the great with magicians name
        magician[i] = "The Great " + magician[i];
    }

}
show_magicians(magician_name);
console.log(magician_name);
















// 41.	Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
/*
const magician_name:string[] = ['Paul Daniels','David Blaine','Derren Brown','Harry Houdini','Penn & Teller'];
function show_magicians(magician:string[]){
    for(let magic in magician){
        console.log(`${magician[magic]}`);
    }

}
show_magicians(magician_name);
console.log(magician_name)










// 39.	City Names: Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this:"Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
/*
function city_country(name:string, country:string){
    console.log(`"${name}, ${country}"`);
}

city_country('Lahore', 'Pakistan');













// 37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default 
// with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any 
// size with a different message.
/*
function large_shirt(text:string="I love TypeScript", size:string="Large"){
    console.log(`${size},${text}`);
}
function medium_shirt(text:string="I love TypeScript", size:string="Medium"){
    console.log(`${size},${text}`);
}

function anySize_shirt(text:string="I love TypeScript", size:string){
    console.log(`${size},${text}`);
}
large_shirt();
medium_shirt();
anySize_shirt('I love typeScript','Small');













// 35.	Animals: Think of at least three different animals that have a common characteristic. 
//     Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// • Add a line at the end of your program stating what these animals have in common. 
//     You could print a sentence such as Any of these animals would make a great pet!
/*
let animals: string[] = ['Dog', 'Cat', 'Lion'];
for(let i=0; i < animals.length; i++){
    console.log(`A ${animals[i]} would have a great pet.`);
}
console.log(`These animals are dependent on Humans to Live `)
















// 34.	Pizzas: Think of at least three kinds of your favorite pizza. 
//      Store these pizza names in a array, and then use a for loop 
//      to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of 
//      the pizza instead of printing just the name of the pizza. 
//      For each pizza you should have one line of output containing a 
//      simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, 
//      that states how much you like pizza. 
//      The output should consist of three or more lines about the 
//      kinds of pizza you like and then an additional sentence, 
//      such as I really love pizza!
/*
let favorite_pizza: string[] = ['Pepperoni','Cheese','Extra Topping'];
for(let i=0; i < favorite_pizza.length; i++){
    console.log(`I like ${favorite_pizza[i]}`);
}
console.log(`I really Like Pepperoni pizza.`);
console.log(`I really Like Cheese pizza.`);
console.log(`I really Like Extra Topping pizza.`);















// 33.	Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
// Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
// Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
/*
const numbers: number[] = [1,2,3,4,5,6,7,8,9];
let endings: string ;
for (let i = 0; i < numbers.length; i++){
    let number = numbers[i];
    if(number == 1){
        endings = 'st';
    }
    else if(number == 2){
        endings = 'nd';
    }
    else if(number == 3){
        endings = 'rd';
    }
    else{
        endings = 'th';
    }
    console.log(number + endings);
} 













// 32.	Checking Usernames: Do the following to create a program that simulates how websites
//  ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. 
//     Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. 
//     If it has, print a message that the person will need to enter a new username. 
//     If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
/*
const current_users: string[] = ['faizan','NAJAM','Zubair','Haroon','Ishfaq','Ali'];
const new_users: string[] = ['faizan','NAJAM','Gul','ali','Yasir','Obaid'];
for(let i = 0; i < new_users.length; i++ ){
    // const intersection = current_users.filter((item) => new_users.includes(item));
    if(current_users.includes(new_users[i])){
        console.log(`The User ${new_users[i]}  already exist, you need to enter a new username.`);
    }else{
        console.log(`The User ${new_users[i]} is available`);
    }
}












// 31.	No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed
/*
let userNames: string[] = [];
// check if the array has items inside it.
if(userNames.length > 0){
    // iterate over the array
    for (let users in userNames){

        if(userNames[users].includes("admin")){
            console.log(`Hello Admin, would you like to see a status report?`);
        }else{
            console.log(`Hello ${userNames[users]}, thank you for logging in again.`); 
            }
        }       
}
//  if the array is empty 
else{
    console.log("We need to find some users!")
}

















// 29.	Favorite Fruit: Make a array of your favorite fruits, and 
// then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!
/*
let favorite_fruits: string[] = ['Orange','Kivi','Pineapple'];

if(favorite_fruits.includes("Orange")){
    console.log(`I really like Orange.`);
}
if (favorite_fruits.includes("Kivi")){
    console.log("I really like Kivi");
}
if (favorite_fruits.includes("Pineapple")){
    console.log("I really like Pineapple");
}
if (favorite_fruits.includes("Apple")){
    console.log("I really like Apple");
}
if (favorite_fruits.includes("Banana")){
    console.log("I really like Banana");
}














// 28.	Stages of Life: Write an if-else chain that determines a person’s stage of life. 
// Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
/*
let age: number = 70;

if(age < 2){
    console.log("Person is a baby.");
}
else if(age == 2 || age < 4){
    console.log("Person is toddler.");
}
else if (age == 4 || age < 13){
    console.log("Person is a kid.");
}
else if(age == 13 || age < 20){
    console.log("Person is teenager");
}
else if(age == 20 || age < 65){
    console.log("Person is an adult");
}
else{
    console.log("Person is an elder");
}















// 26.	Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
/*
let alien_color: string = "green";
if (alien_color == 'green'){
    console.log("The player just earned 5 points for shooting the alien.");
}
if (alien_color != 'green'){
    console.log("The player just earned 10 points.");
}

if (alien_color == "green"){
    console.log("The player just earned 5 points for shooting the alien." );
}
else{
    console.log("The player just earned 10 points");
}
*/


















// 25.	Alien Colors #1: Imagine an alien was just shot down in a game. 
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. 
//   If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. 
//   (The version that fails will have no output.)
/*
let alien_color: string = "green";
if (alien_color == 'green'){
    console.log("The player just earned 5 points.");
}
if (alien_color == 'yellow'){
    console.log();
}
*/















// 24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, 
//   greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
/*
let str1 = "hello";
let str2 = "world";
let str3 = "HELLO";
let num1 = 5;
let num2 = 10;
let arr: number[] = [1, 2, 3, 4, 5];
let arr1: string[] = ["Najam","Ali","Zubair"];

// Test 1: Is str1 equal to "hello"? I predict true.
console.log(str1 == "hello");

// Test 2: Is str1 not equal to str2? I predict true.
console.log(str1 != str2);

// Test 3: Is str1 equal to str3 when case is ignored? I predict true.
console.log(str1.toLowerCase() == str3.toLowerCase());

// Test 4: Is num1 greater than num2? I predict false.
console.log(num1 > num2);

// Test 5: Is num2 greater than or equal to 10? I predict true.
console.log(num2 >= 10);

// Test 6: Is num1 less than or equal to num2? I predict true.
console.log(num1 <= num2);

// Test 7: Is num1 equal to 5 and num2 equal to 10? I predict true.
console.log(num1 == 5 && num2 == 10);

// Test 8: Is num1 greater than 3 or num2 less than 5? I predict true.
console.log(num1 > 3 || num2 < 5);

// Test 9: Is the number 3 in the array? I predict true.
console.log(arr.includes(3));

// Test 10: Is the number 6 not in the array? I predict true.
console.log(!arr.includes(6));

// Test 11: Is the name "Hiba Noor" not in the array? I predict true.
console.log(!arr.includes(6));

*/










// 23.	Conditional Tests: Write a series of conditional tests. 
// Print a statement describing each test and your prediction for the results of each test. 
// Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
/*
let num1 = 5;
let num2 = 10;
let str1 = "hello";
let str2 = "world!";

// Test 1: Is num1 greater than num2? I predict false.
console.log(num1 > num2);

// Test 2: Is str1 equal to "Hello"? I predict false.
console.log(str1 === "Hello");

// Test 3: Is num2 less than or equal to 10? I predict true.
console.log(num2 <= 10);

// Test 4: Is str1 equal to str2? I predict false.
console.log(str1 == str2);

// Test 5: Is num1 strictly equal to 5? I predict true.
console.log(num1 === 5);

// Test 6: Is str2 greater than str1? I predict false.
console.log(str2.length > num2);

// Test 7: Is num1 less than or equal to num2? I predict true.
console.log(num1 <= num2);

// Test 8: Is str1 truthy? I predict true.
console.log(Boolean(str1));

// Test 9: Is num1 equal to 5 and num2 equal to 10? I predict true.
console.log(num1 == 5 && num2 == 10);

// Test 10: Is str1 equal to "hello" and str2 equal to "world"? I predict false.
console.log(str1 === "hello" && str2 === "world");
*/















// 22.	Intentional Error: If you haven’t received an array index error in one of your programs yet, 
// try to make one happen. Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.
/*
const different_things = ["Python","TypeScript","Rust","C++", "Pakistan","Saudia","Rawalpindi","Nile","K2"];
console.log(different_things[15]);
console.log(different_things[10]);

console.log(different_things[8]);
console.log(different_things[6]);
*/


















// 20.	Think of something you could store in a array. 
// For example, you could make a list of mountains, rivers, countries, cities, languages, 
// or anything else you’d like. Write a program that creates a list containing these items.
/*
const different_things = ["Python","TypeScript","Rust","C++", "Pakistan","Saudia","Rawalpindi","Nile","K2"];
console.log(different_things);
*/












// 19.	Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.

/*
let change_guests_list = ['Ali Raza','Muhammad Zubair','Masadaq Ali Raza'];
console.log("\n");
console.log(`Guest "${change_guests_list[2]}" would not be able to come the dinner.`);
console.log("\n");
let index: number = change_guests_list.indexOf('Masadaq Ali Raza');
change_guests_list.splice(index,1, 'Yasir Noorani');
console.log(`${change_guests_list[0]}, You are invited for dinner at hotel.`);
console.log(`${change_guests_list[1]}, You are invited for dinner at hotel.`);
console.log(`${change_guests_list[2]}, You are invited for dinner at hotel.`);
console.log("\n");

console.log(`I am inviting total ${change_guests_list.length} persons on dinner.`);
*/























// 18.	Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. 
// Print the list to show that its order has changed.
/*
let fav_places = ["Swat","Boyun Village","Hunza Valley","Yarkhun Valley","Phander Lake"];
console.log("Original: ", fav_places);
const alphabetical_order = fav_places.slice().sort();
console.log("Alphabetical Order: ", alphabetical_order);
// Show that your array is still in its original order by printing it.
console.log("Original: ", fav_places);
// • Print your array in reverse alphabetical order without changing the order of the original list.
const reverse_alphabetical_order = fav_places.slice().sort().reverse();
console.log("Reverse Alphabetical Order: ", reverse_alphabetical_order);
// Show that your array is still in its original order by printing it again.
console.log("Original: ", fav_places);
// Reverse the order of your list. Print the array to show that its order has changed.
const reverse_order = fav_places.slice().reverse();
console.log("Reverse Order: ",reverse_order);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
const reverse_order_again = fav_places.slice().reverse().reverse();
console.log("Reverse Order Again: ",reverse_order_again);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
const again_alphabetical_order = fav_places.slice().sort();
console.log("Again Alphabetical Order: ", again_alphabetical_order);
// • Sort to change your array so it’s stored in reverse alphabetical order.
const again_reverse_alphabetical_order = fav_places.slice().sort().reverse();
console.log("Again Reverse Alphabetical Order: ",again_reverse_alphabetical_order);
*/




















// 16.	More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. 
//     Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
/*
let more_guests = ['Ali Raza','Muhammad Zubair','Masadaq Ali Raza'];
let start = more_guests.unshift("Gul Badshah");     // adds the element at the start of an array
let end = more_guests.push('Yasir Noorani');     // adds the element at the end of an array
let middle = Math.floor((more_guests.length - 1) /2)      // adds the element at the middle of an array
more_guests.splice(middle, 0,'Najam');              
// console.log(middle);
let index_number: number = more_guests.indexOf('Masadaq Ali Raza');
//  By using splice() method we can add guests.
more_guests.splice(index_number,1, 'Atta Ul Ahsan');
console.log(`${more_guests[0]}, You are invited for dinner.`);
console.log(`${more_guests[1]}, You are invited for dinner.`);
console.log(`${more_guests[2]}, You are invited for dinner.`);
console.log(`${more_guests[3]}, You are invited for dinner.`);
console.log(`${more_guests[4]}, You are invited for dinner.`);
console.log("\n");

console.log(`Hi guys i found out that dinner table won’t
 arrive in time for the dinner, and i have space for only two guests.`);
 */

















// 14.	Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people 
// you’d like to invite to dinner. Then use your list to print a message to 
// each person, inviting them to dinner.
/*
let guest_list = ['Ali Raza','Muhammad Zubair','Masadaq Ali Raza'];
console.log(`${guest_list[0]}, You are invited for dinner at PC hotel.`);
console.log(`${guest_list[1]}, You are invited for dinner at PC hotel.`);
console.log(`${guest_list[2]}, You are invited for dinner at PC hotel.`);
*/



















// 13.	Your Own Array: Think of your favorite mode of transportation, 
// such as a motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, 
// such as “I would like to own a Honda motorcycle.”
/*
let fav_transport = ['Cultus','E-Tron','Alto'];
console.log(`I would like to own a ${fav_transport[0]} car.`);
console.log(`I would like to own a ${fav_transport[1]}  Electric car.`);
console.log(`I would like to own a ${fav_transport[2]} car.`);
*/











// 12.	Greetings: Start with the array you used in Exercise 11, 
// but instead of just printing each person’s name, print a message to them. 
// The text of each message should be the same, 
// but each message should be personalized with the person’s name.
//let frnd_names = ['Ali Raza','Ubaid','Atta','Zubair','Masadaq Ali Raza'];
//console.log(`${frnd_names[0]}, Welcome to in Web3.0 PIAIC`);
//console.log(`${frnd_names[1]}, Welcome to in Web3.0 PIAIC`);
//console.log(`${frnd_names[2]}, Welcome to in Web3.0 PIAIC`);











/*
// 11.	Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.
let friend_names = ['Ali Raza','Ubaid','Atta','Zubair'];
console.log(friend_names[0]);
console.log(friend_names[2]);
console.log(friend_names[3]);
*/







//let fav_number: number = 99;    // My favorite number
//console.log(`My favorite number is ${fav_number}`);    // Printing favorite number



// Defining variable and its datatype
/*
let add: number = fav_number + 8;
let sub: number = fav_number - 8;   // subtract 8 from fav_number
let mul: number = fav_number * 8;
let div: number = fav_number / 8;


console.log(`Addition =\t${add}`);
*/
//console.log(`Subtraction =\t${sub}`);
//console.log(`Multiplication = \t${mul}`);
//console.log(`Division = \t${div}`);





// 9.	Favorite Number: Store your favorite number in a variable. 
// Then, using that variable, create a message that reveals your favorite number.
// Print that message.

//let favorite_number: number = 99;
//console.log(`My favorite number is ${favorite_number}`);











// 8.	You should create four lines that look like this:
// ________________________________________
// console.log(5 + 3)
// ________________________________________
// Your output should simply be four lines with the number 8 appearing once on each line.
/*
console.log(`________________________________________`);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(`________________________________________`);
*/
















// 7.	Number Eight: Write addition, subtraction, multiplication, and division operations 
// that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
/*
let addition: number = 2 + 8;
let subtraction: number = 2 - 8;
let multiplication: number = 2 * 8;
let division: number = 2 / 8;

console.log(`Addition =\t${addition}`);
console.log(`Subtraction =\t${subtraction}`);
console.log(`Multiplication = \t${multiplication}`);
console.log(`Division = \t${division}`);
*/









// 6.	Stripping Names: Store a person’s name, 
// and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. 
// Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.

//let person_name: string = "\t    Muhammad ASSADIFTEKHAR   \n";
//console.log(`${person_name}`);
//person_name = person_name.trim();
//console.log(`${person_name}`);








// 5.	Famous Quote 2: Repeat Exercise 4, but this time store the 

// famous person’s name in a variable called famous_person.Then compose your message 
// and store it in a new variable called message. Print your message.

//let famous_person = "Albert Einstein";
//let message = `"A person who never made a mistake never tried anything new."`;

//console.log(`${famous_person} once said, ${message}`);