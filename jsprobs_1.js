//---> sum of two numbers

const sum = (a, b) => {
  return a + b;
};

console.log(sum(10, 52));

//output
//62

//---> area of a rectangle

const area = (len, wid) => {
  if (len && wid >= 0) {
    console.log("area of the rectangle is:", len * wid);
  } else {
    //throw new Error("there is no negation in areas"); //gives an entire summary of the error
  }
};
area(5, 9);
area(3, -6);

//output
//area of the rectangle is: 45

//Error: there is no negation in areas
//at area (C:\Users\Geetha\OneDrive\Desktop\jsprobs\jsprobs_1.js:18:11)
//at Object.<anonymous> (C:\Users\Geetha\OneDrive\Desktop\jsprobs\jsprobs_1.js:22:1)
//at Module._compile (node:internal/modules/cjs/loader:1688:14)
//at Object..js (node:internal/modules/cjs/loader:1820:10)
//at Module.load (node:internal/modules/cjs/loader:1423:32)
//at Function._load (node:internal/modules/cjs/loader:1246:12)
//at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
//at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//at node:internal/main/run_main_module:36:49

//---> check if the number is odd or even

const rem = (a) => {
  if (a % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
};

rem(10);

// using ternary operators

const rem1 = (a) => {
  return a % 2 === 0 ? "even" : "odd";
};

console.log(rem1(20));

//output
//even

//---> printing the smallest of 3 numbers

const small = (a, b, c) => {
  if (a > b && a > c) {
    console.log("a is the largest");
  } else if (b > a && b > c) {
    console.log("b is the largest");
  } else {
    console.log("c is the largest ");
  }
};

small(20, 55, 100);

console.log(Math.min(77, 5, 8)); //-----built in module

//output
//c is the largest

//---> printing the smallest of 3 numbers

//method 1(using arrays built in functions)

const strrev = (str) => {
  return str.split("").reverse().join("");
};

console.log(strrev("allabb"));

//method 2

const strr = (str2) => {
  let result = "";
  if (typeof str2 === "string") {
    for (let i = str2.length - 1; i >= 0; i--) {
      result = result + str2[i];
    }
  } else {
    throw new Error("nothing apart from strings are allowed");
  }

  return result;
};
console.log("the reversed string is:", strr("hello"));
console.log(strr("45566"));

//output
//the reversed string is: olleh
//66554

//----> function to calculate factorial of a number

const fact = (num) => {
  let buck = 1;
  for (let i = num; i >= 1; i--) {
    buck = buck * i;
  }
  return buck;
};
console.log(fact(10));

//output
//3628800

//---> find if the year entered in a leap year pr not
//method 1

function leap(year) {
  if ((year % 4 === 0 && year % 100 === 0) || year % 400 === 0) {
    console.log("it is a leap year");
  } else {
    console.log("it is not a leap year");
  }
}

leap(2000);
leap(2023);

//method 2

function leapy(year) {
  return (year % 4 === 0 && year % 100 === 0) || year % 400 === 0
    ? "yes"
    : "no";
}

console.log(leapy(2000));
console.log(leapy(2023));

//output
//it is a leap year
//it is not a leap year

//---> wap to calculate the sum of each digits of the number eg:12=1+2

function dig(num) {
  const str = num.toString();
  const arr = str.split(""); // ["2","3"]

  console.log(arr);
  let sum = 0;
  arr.forEach((element) => {
    console.log(parseInt(element));
    sum = sum + parseInt(element);
  });
  return sum;
}

console.log(dig(45621));

//output
//[ '4', '5', '6', '2', '1' ]
// 18

//--->generate a multiplication table

function tables(num, limit) {
  for (let i = 1; i <= limit; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

tables(4, 10);

//output
// 4 x 1 = 4
// 4 x 2 = 8
// 4 x 3 = 12
// 4 x 4 = 16
// 4 x 5 = 20
// 4 x 6 = 24
// 4 x 7 = 28
// 4 x 8 = 32
// 4 x 9 = 36
// 4 x 10 = 40

//---> find the largest element of the array
//using sort function

function getLargest(arr) {
  arr.sort((a, b) => b - a); // descending order
  return arr[0]; // first element is the largest
}

console.log(getLargest([10, 3, 45, 7, 99, 23]));

//output
//99

//using

console.log(Math.max(10, 3, 45, 7, 99, 23));
