//-------------------------------------------------------------


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
//  function isPrime(num) {
//      if (num <=1)  console.log("false");
// for (let n = 2; n < num; n++) {
//         if (num % n === 0) {
//            // console.log("false");
//         } else { 
//             console.log("true", num);
//             }
//     }
    
    
//         }

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


               // example 3

               let num = 331;
let count = 0;
let foundPrime = false;
while (!foundPrime) {
    // console.log(num++);
    // count++;
    let isPrime = true;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime && num > 1) {
        console.log(num + " is prime");
        foundPrime = true;
    }
    num++;
}









    
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

// PART 3 LOOPS LAB


const data1 = {id:"42", name:"Bruce", occupation:"Knight", age:"41"}
const data2= {id:"57", name:"Bob", occupation:"Fry Cook", age:"19"}
const data3= {id:"63", name:"Blaine", occupation:"Quiz Master", age:"58"}
const data4= {id:"98", name:"Bill", occupation:"Doctor's Assistant", age:"26"}


console.table([data1, data2, data3, data4]);

  




 
