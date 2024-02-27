// let movie1 = 'Titanic';
// let movie2 = 'taken';
// let movie3 = 'Mask';

// const movies = [movie1, movie2, movie3];

// console.log(movies);


// let firstMovie = movies[0];
// console.log(firstMovie);
// console.log(movies.length);
// //replacing taken
// movies[1] = "taken";
// //adding another index
// console.log(movies);
// movies[movies.length] = 'The Terminal';
// console.log(movies);


// // next
// for (let i=0; i< movies.length;i++) {
//     console.log("I am in the loop and i is", i)
//     console.log(movies[i]);
// }

// //----------------------------------------------------------------
// //built in array methods
// //----------------------------------------------------------------
// //concat()

// //combining array
// const moreMovies = ["Lilo & Stitch", "Princess Diaries", "shrek" ]
// const allMovies = movies.concat(moreMovies);
// console.log(allMovies);

// // adding a string to the end
// const allMovies2 = allMovies.concat("Sister Act");

// console.log(allMovies2);
// console.log(movies);

// //join()
// //join("and")

// const movieString = allMovies2.join();
// console.log(movieString);

// console.log('i have the following movies: '+ movieString);

// //didnt work belowjk
// /// an example of not using arrays but they would be useful
// let name1 = "John";
// let name2 = "Abigail";
// let name3 = "Jerome";
// // ...  and we do this for every student in class
// let name30 = "Cynthia";

// let greeting1 = "Hello, " + name1 + "!";
// // ... but do this for all 30 students
// let greeting30 = "Hello, " + name30 + "!";

// // console.log(greeting1);

// // we can create an array
// // arrays and objects can be declared as const and still be changed
// const names = ["John", "Abigail", "Jerome", "Cynthia"];
// const greetings = [];

// // console.log("names array looks like this: ");
// // console.log(names);

// // this for loop goes through the names array, and for each one
// // makes a new string and saves it to the greetings array
// // and the outputs it to the console

// // console.log('names.length, ', names.length);
// for (let i=0; i <names.length; i++) {
//     // console.log(i);
//     greetings[i] = "Hello, " + names[i] + "!";
//     // console.log(greetings[i]);
// }

// const numArray = [3, 5, 6 ,23, 546, 2, 45, 24, 75, 2, 4];
// console.log(numArray);
// console.log('numArray.length is:', numArray.length);
// console.log(numArray[0]);
// console.log(numArray[10]);
// console.log(numArray[11]);

// // this changes the value of the 4th element from 23 to 230
// numArray[3] = 230;[p;0

// ]

// c
// on
// so
// le
// .log
// (numArray);

// /
// / this ad
// ds a new element
// numAr
// ra
// y[
//     11
// ]
//  =
  
//  50
//  0
//  ;

// co

// ns
// o
// le.
// l
// og
// (n
//     um
    
//     Ar
    
//     ra
//     y
//     );



// /

// / this would create a bunch of empty 
// // numArray[30] = 70800;
// // console.log(numArray);

// // this adds a new element at the very end
// numArray[numArray.length] = 700;
// console.log(numArray);

// // const arrayName = [ el1, el2, ..., eln];'   ,  kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;, ask christina/group 

// movieString = allMovies2.join(' AND ');
// console.log(movieString);


// class-group practice SPLICE
// const fruits = ["Banana", "Apple", "Mango"];
// //const citrus = fruits.slice(1, 3);
// //console.log(citrus);
// fruits.splice(2, 0, "Grapefruit", "Lime");
// console.log(fruits);



// //2nd example with splice
// const animals = ["Bear","Cat", "Lion", "Panda"];
// const feline = animals.slice(1, 3);
// // console.log(feline);
// animals.splice(3, 0, "Eagle", "Owl");
// console.log(animals);


// lastindexOf() string
let text = "Hello planet earth, you are a great planet.";
let result = text.lastIndexOf("planet", 20);
//console.log(result); //ask christina

//document.getElementById("demo").innerHTML = result;


//lastindexOf() array

const fruits = ["Apple", "Orange", "Apple", "Mango", "Mango"];
let index = fruits.lastIndexOf("Apple");

// console.log(index);

//document.getElementById("demo").innerHTML = index;

//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------


//assignment code
// for loop that print 1 to 100

// 
for (let i = 1; i < 101; i++) {
   console.log(i);
}

// checking if divisible by a number 

//if divisible by 3
if (30 % 3 == 0) {
    //console.log("Fizz");
  }else {
    console.log("30 is not divisible by 3");
  }

  //if divisible by 5
  if (30 % 5 == 0) {
    console.log("Buzz");
  }else {
    console.log("30 is not divisible by 5");
  }


// if divisible by both 


  if (30 % 5 == 0, 45 % 3 == 0) {
    console.log("Fizz Buzz");
  }


  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------

                        //PART 2 LOOPS LAB

//-------------------------------------------------------------------------------

let i = 0;

while (i < 3) {

  console.log(i);

   i++;}


   let sum = 0;

for (let i = 0; i < 5; i++) {

   if (i % 2 === 0) continue;

   sum += i;

}

console.log(sum);

// part 2 finding prime numbers examples

// // example 1 
 function isPrime(num) {
     if (num <=1)  console.log("false");
for (let n = 2; n < num; n++) {
        if (num % n === 0) {
           // console.log("false");
        } else { 
            console.log("true", num);
            }
    }
    
    
        }

//         isPrime(10)
    
    //     // example 2 

        

    //     function isPrime(num) {
    //         if (num <=3)  console.log("false");
    //    for (let n = 4; n < num; n++) {
    //            if (num % n === 0) {
    //                console.log("false");
    //            } else { 
    //                console.log("true", num);
    //                }
    //        }
           
           
    //            }
       
    //            isPrime(7)


               //


    
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

// PART 3 LOOPS LAB


const data1 = {id:"42", name:"Bruce", occupation:"Knight", age:"41"}
const data2= {id:"57", name:"Bob", occupation:"Fry Cook", age:"19"}
const data3= {id:"63", name:"Blaine", occupation:"Quiz Master", age:"58"}
const data4= {id:"98", name:"Bill", occupation:"Doctor's Assistant", age:"26"}


console.table([data1, data2, data3, data4]);

  




 
