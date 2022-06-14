let userName = "Jack";
let hasLoggedIn: boolean = true;

userName += " Herrington";

console.log(userName);

let myNumber: number = 10;

// A regular expression is a sequence of characters that specifies a search pattern in text.
// Usually such patterns are used by string-searching algorithms for "find" or "find and replace" operations on strings, or for input validation
let myRegex: RegExp = /foo/;

const names: string[] = userName.split(" ");
const myValues: Array<number> = [1, 2, 3, 4];

interface Person {
  first: string;
  last: string;
  cool: boolean;
}

const myPerson: Person = {
  first: "Jack",
  last: "Herrington",
  cool: true
};

console.log(myPerson.cool);
