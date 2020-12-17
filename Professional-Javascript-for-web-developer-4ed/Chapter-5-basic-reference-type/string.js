// the string type
//strings, numbers, booleans have two version primitive and object
// these three are primitive wrapper types(create the object behind and then destroy object)

//same for number and booleans
var a = "string";
console.log(typeof a); // yields "string" 
var a = new String('string'); 
console.log(typeof a); // yields "object" 



let stringObject = new String("Steven Chen");
console.log(stringObject instanceof String); //true
console.log(stringObject.length); // 11
 
//methods on object String also available on primitive
console.log(stringObject.valueOf()); //Steven Chen
console.log(stringObject.toLocaleString()); //Steven Chen
console.log(stringObject.toString()); //Steven Chen

let primitiveString = "Steven Chen";
console.log(primitiveString.valueOf()); //Steven Chen
console.log(primitiveString.toLocaleString()); //Steven Chen
console.log(primitiveString.toString()); //Steven Chen
console.log(stringObject.length); // 11

//Character
let message = "abcde";
console.log(message.length);
console.log(message.charAt(2)); // c
console.log(message.charCodeAt(2)); //99
console.log(String.fromCharCode(99)); // c

//charAt cannot handle both single-code unit and surrogate pair character but codePointAt can
let testCode = String.fromCharCode(0x1F60A);
console.log(testCode.charAt(0)); // cannot display
console.log(testCode.codePointAt(0)); //62986


//fromCharCode has an analogue in fromCodePoint. fromCodePoint accept any number of code point numbers and return

//String manipujlation method
//concat
let stringValue = "hello ";
let result = stringValue.concat("world");
console.log(result); //hello world

//slice, substr, substring create string values from a substring
//common these methods do not alert original value
//when it comes to two parameter they behave differently
let subStringValue = "hello world";
console.log(subStringValue.slice(3)); //lo world
console.log(subStringValue.substring(3)); //lo world
console.log(subStringValue.substr(3, 7)); //lo world
console.log(subStringValue.slice(3, 7)); //lo w
console.log(subStringValue.substring(3, 7)); //lo w
console.log(subStringValue.substr(3, 7)); //lo worl
console.log(subStringValue.slice(3, -4)); //lo w
console.log(subStringValue.substring(3, -4)); //hel
console.log(subStringValue.substr(3, -4)); //[empty string]

//string location indexOf and lastIndexOf
console.log(subStringValue.indexOf("o"));
console.log(subStringValue.lastIndexOf("o"));

//string inclusion method
console.log(subStringValue.startsWith("h")); //true
console.log(subStringValue.endsWith("d")); //true
console.log(subStringValue.includes("hello")); //true

//string trim method
let stringBeforeTrimValue = " hello world ";
let stringAfterTrimValue = stringBeforeTrimValue.trim()
console.log(stringAfterTrimValue); //hello world

//repeat method
let stringRepeatValue = "na ";
console.log(stringRepeatValue.repeat(2)); //na na 

//padStart and padEnd
let stringPaddingValue = "foo";
console.log(stringPaddingValue.padStart(6)); //      foo
console.log(stringPaddingValue.padEnd(6)); //foo      
console.log(stringPaddingValue.padStart(8, "bar")); //barbafoo
console.log(stringPaddingValue.padEnd(8, "bar")); //foobarba



//string iterators and destructuring
let stringDestructingValue = "abc"
let stringIterator = stringDestructingValue[Symbol.iterator]();
console.log(stringIterator.next()); //{ value: 'a', done: false}
console.log(stringIterator.next()); //{ value: 'b', done: false}
console.log(stringIterator.next()); //{ value: 'c', done: false}

console.log([...stringDestructingValue]);//['a', 'b', 'c']


//string Case Method:
let stringCaseValue = "Hello World";
console.log(stringCaseValue.toLocaleLowerCase());//hello world
console.log(stringCaseValue.toUpperCase());//HELLO WORLD
console.log(stringCaseValue.toLocaleLowerCase());//hello world
console.log(stringCaseValue.toLowerCase()); //hello world

//string pattern-matching methods
let text = "cat, bat, sat, fat";
let pattern = /.at/;
let matches = text.match(pattern);
console.log(matches.index);//0
console.log(matches[0]);//cat
console.log(matches.lastIndex);//undefined

let pos = text.search(/at/);
console.log(pos);//1

//use string pattern with replace
console.log(text.replace(/at/g, "ond")); //cond, bond, sond, fond


//URI encoding methods:
let url = "http://www.wrox.com/illegal value.js#start";
console.log(decodeURI(encodeURI(url))); //http://www.wrox.com/illegal value.js#start
console.log(decodeURIComponent(encodeURIComponent(url))); //http://www.wrox.com/illegal value.js#start


//Global, Window  global is not accessiable but we can use window object. it is delagate of global

//access to global
let global = function() {
  return this;
}

console.log(global());

