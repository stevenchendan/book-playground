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



