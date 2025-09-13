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

//output
//c is the largest
