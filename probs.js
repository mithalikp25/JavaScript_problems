// 1) Write a JavaScript function that takes two numbers as input and
//prints "it is 100" if either of the numbers is 100 or if their sum
//equals 100. Otherwise, print "not 100".

const checker = (a, b) => {
  if (a === 100 || b === 100 || a + b === 100) {
    console.log("it is 100");
  } else {
    console.log("not 100");
  }
};

//output
//it is 100

checker(60, 40);

// 2) write a JavaScript program to get the extension of a filename

const getFile = (str) => {
  console.log(str.slice(str.lastIndexOf(".")));
  console.log(str.indexOf("."));
};
getFile("index.js.html");

//output
//.html (so what happens here is the lastIndexOf() gets the last occurence of .)
//5(here the first occurence is returned)

// 3) WAP to replace every character in a given string
// with the character following it in the alphabet

const charNext = (str) => {
  return str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");
};

console.log(charNext("hello")); // Output: ifmmp

//output
//ifmmp
