import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// console.log("Hello");
// console.log("Apples");
// let myFunction = function () {
//   console.log("This is a statement");
// }
// function myFunction2() {
//   console.log("This is a also a statement");
// }
// myFunction2();
// myFunction();

// let myFunction3 = function(name, weather,...extraArgs){
//   console.log("Hello " + name + ".");
//   console.log("It is "+ weather + " today");
//   for(let i = 0; i < extraArgs.length; i++){
//     console.log("Extra Arg: " + extraArgs[i]);
//   }
// };

// myFunction3("Adam", "sunny", "Pasta ", "la ", "vista");

// let myFunction4 = function(name){
//   return ("Hello " + name + ".");
// }

// console.log(myFunction4("Eve"));

// let myFunction5 = function(nameFunction){
//   return("Hello " + nameFunction() + ".");
// }
// console.log(myFunction5(function(){
//   return "Joseph";
// }))

// let printName = function(nameFunction, printFunction){
//   printFunction(myFunction5(nameFunction));
// }

// printName(function(){return "Julio"}, console.log);

// let myFunction6 = (nameFunction) => ("Hello " + nameFunction() + ".");
// let printName2 = (nameFunction, printFunction) => printFunction(myFunction6(nameFunction));
// printName2(function() { return "Rosalita"}, console.log);

// let messageFunction1 = function(name, weather){
//   let message = "Hello, Spider Pig";
//   if(weather == "sunny"){
//     let message = "It is a SUNNY day";
//     console.log(message);
//   }else{
//     let message = "It is " + weather + " today";
//     console.log(message);
//   }
//   console.log(message);
// }

// messageFunction1("Carlos ", "raining");

// let messageFunction2 = function(name, weather){
//   var message = "Hello, Spider Man";
//   if(weather == "sunny"){
//     var message = "It is a happy day";
//     console.log(message);
//   }else{
//     var message = "It is " + weather + " today";
//     console.log(message);
//   }
//   console.log(message);
// }

// messageFunction2("Carlos ", "snowy");

// let myFunction7 = function(name){
//   let myLocalVar = "sunny";
//   let innerFunction = function(){
//     return ("Hello " + name +". Today is " + myLocalVar + ".");
//   }
//   return innerFunction();
// }
// console.log(myFunction7("Jimmy"));

// let messageFunction8 = function(weather){
//   let message = `It is ${weather} today`;
//   console.log(message);
// }

// messageFunction8("snowing");

// let name = "Adam";
// if (name == "Adam") {
//     console.log("Name is Adam");
// } else if (name == "Jacqui") {
//     console.log("Name is Jacqui");
// } else {
//     console.log("Name is neither Adam or Jacqui");
// }
// switch (name) {
//     case "Adam":
//         console.log("Name is Adam");
//         break;
//     case "Jacqui":
//         console.log("Name is Jacqui");
//         break;
//     default:
//         console.log("Name is neither Adam or Jacqui");
//         break;
// }

// // let firstVal = 5;
// // let secondVal = "5";
// // if (firstVal === secondVal) {
// //     console.log("They are the same");
// // } else {
// //     console.log("They are NOT the same");
// // }
// ///This condition will always return 'false' since the types 'number' and 'string' have no overlap

// let myArray = [100, "Adam", true]

// for(let i = 0; i < myArray.length; i++){
//   console.log("Index " + i + ": " + myArray[i]);
// }
// console.log("---");

// myArray.forEach((value, index) => console.log("Index " + index + ": " + value));

// console.log("***");

// let myArray2 = [100, "Adam", true];
// let otherArray = [...myArray, 200, "Bob", false];

// for(let i = 0; i < otherArray.length; i++){
//   console.log(`Array item ${i}: ${otherArray[i]}`)
// }
// console.log("###");

// let products = [
//   { name: "Hat", price: 24.5, stock: 10 },
//   { name: "Kayak", price: 289.99, stock: 1 },
//   { name: "Soccer Ball", price: 10, stock: 0 },
//   { name: "Running Shoes", price: 116.50, stock: 20 }
// ];
// let totalValue = products
//   .filter(item => item.stock > 0)
//   .reduce((prev, item) => prev + (item.price * item.stock), 0);
// console.log("Total value: $" + totalValue.toFixed(2));


let myData = {
  name: "Adam",
  weather: "sunny",
  printMessages: function(){
    console.log("Hello " + this.name + ".");
    console.log("Today is " + this.weather + ".");
  }
};

console.log("Hello " + myData.name + ".");
console.log("Today is " + myData.weather + ".");
console.log("---");
myData.printMessages();

console.log("###");
